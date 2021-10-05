const Product = require('../models/Product');
class Controllers {
  static async getProducts(req, res) {
    const findQuery = new FindQueries();
    const mapQuery = new MapQueries();

    const { getFindQueries } = findQuery;
    const { getMapQueries } = mapQuery;

    findQuery.setFindQueries = req;
    mapQuery.setMapQueries = req;
    const products = await Product.find(getFindQueries)
      .sort(getMapQueries.sort)
      .skip(getMapQueries.skip)
      .limit(getMapQueries.limit)
      .select(getMapQueries.fields);

    return res.json({
      success: true,
      nbHits: products.length,
      data: products,
    });
  }
}

class FindQueries {
  constructor() {
    this.queryObject = {};
  }
  get getFindQueries() {
    return this.queryObject;
  }
  set setFindQueries(req) {
    const { category, brand, name, featured, exp } = req.query;
    if (category) this.queryAttribute('category', category);

    if (brand) this.queryAttribute('brand', brand);

    if (name)
      this.queryAttribute('name', {
        $regex: name,
        $options: 'i',
      });

    if (featured) this.queryAttribute('featured', Boolean(featured));
    if (exp) this.numericFilters(exp);
  }

  numericFilters(exp) {
    // list all possible cases
    const operators = {
      '<': '$lt',
      '>': '$gt',
      '<=': '$lte',
      '>=': '$gte',
      '=': '$eq',
    };
    // write regular expression
    if (exp) {
      const operatorRegex = /\b(<|>|<=|>=|=)\b/g;
      /*
        input: price>=40,stars<3
        output: price-$gte-40,stars-$lt-3
      */
      let converter = exp.replace(
        operatorRegex,
        (match) => `-${operators[match]}-`
      );
      const filterEnums = ['price', 'stars', 'availability_quantity'];
      converter = converter.split(',').forEach((item) => {
        /* 
          input: price-$gte-40,stars-$lt-3
          output: { price: { $gte: 40 }, stars: { $lt: 3 } }
        */
        const [field, operator, number] = item.split('-');
        if (filterEnums.indexOf(field) !== -1) {
          this.queryAttribute(field, {
            [operator]: Number(number),
          });
        }
      });
    }
    // dynamically replace based on the regex
  }

  queryAttribute(key, value) {
    this.queryObject[key] = value;
  }
}

class MapQueries {
  constructor() {
    this.mapQueries = {};
  }

  get getMapQueries() {
    return this.mapQueries;
  }

  set setMapQueries(req) {
    const { sort, fields } = req.query;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    if (sort)
      this.queryAttribute('sort', sort.split(',').join(' ') || 'name price');

    if (fields) this.queryAttribute('fields', fields.split(',').join(' '));

    this.queryAttribute('limit', limit);
    this.queryAttribute('skip', skip);
  }

  queryAttribute(key, value) {
    this.mapQueries[key] = value;
  }
}

module.exports = Controllers;
