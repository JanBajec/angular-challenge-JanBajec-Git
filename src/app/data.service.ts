import {Injectable} from '@angular/core';
import {Data} from './data';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  searchNames: string[] = [];
  products: Data[] = [
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 1',
      'cardDescription': 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705370',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 2',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Eclipse-P300-TG/P300_BK-1.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705371',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title3',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Eclipse-P300-TG/P300_BK-1.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 2900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705372',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 4',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 5900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705373',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title5',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 500,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'spId': '32e70cc6fa544fde966bc852116606f3',
      'campaignId': 'CN2017012431',
      'cardTitle': 'Titl6',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'cardTags': [],
      'mediaType': 'image',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'additionalMediaUrls': [],
      'callToAction': 'book',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'listOfAttributes': [],
      'cardQuestion': [],
      'isPhysicalProduct': false,
      'availableQuantity': 123,
      'returnPolicy': 'sdfdssdfsfsfsdf',
      'termsOfServices': 'sdfsdfsdffds',
      'likes': 0,
      'shares': 0,
      'views': 0,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'planType': 'oneTimeCharges',
          'planName': '',
          'planDescription': '',
          'price': {
            'amount': 21,
            'currency': 'USD',
            'currencySymbol': ''
          },
          'isShippingChargesRequired': true,
          'shippingCharges': {
            'amount': 0,
            'currency': '',
            'currencySymbol': ''
          },
          'startsOn': '',
          'endsOn': '',
          'displayPrice': {
            'amount': 0,
            'currency': '',
            'currencySymbol': ''
          },
          'displayPriceUnit': '',
          'displayPriceNotes': '',
          'invoicingCylcle': '',
          'subsciptionSchedule': {
            'startDateTime': '0001-01-01T00:00:00Z',
            'endDateTime': '0001-01-01T00:00:00Z'
          },
          'subscriptionPeriod': {
            'unitOfPeriod': '',
            'countOfPeriod': 0
          },
          'appliesTo': '',
          'noOfAllowedUsers': 0,
          'minSubPeriod': {
            'unitOfPeriod': '',
            'countOfPeriod': 0
          },
          'freeTrialPeriod': {
            'unitOfPeriod': '',
            'countOfPeriod': 0
          },
/*          'freeTrialPeriod': { je tu mogoce napaka? saj sta imeni isti kot ena višje?
            'amount': 0,
            'currency': '',
            'currencySymbol': ''
          },*/
          'id': '1b0f10ad11774e57b7d98061f0039e48'
        }
      ],
      'isLocalPriceViewEnabled': false,
      'segments': [],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJ2QeB5YMEGTkRYiR-zGy-OsI',
          'description': 'Lahore, Punjab, Pakistan'
        }
      ],
      'startAgeLimit': 2,
      'endAgeLimit': 6,
      'gender': 'men',
      'groups': [],
      'interests': [],
      'currentWorkflow': 'saved',
      'listOfWorkflowStatuses': [],
      'listOfReviews': [],
      'totalReviews': 0,
      'listOfSupportTags': [
        {
          'tagName': 'dfg',
          'supportContent': 'dfgdfgfgfd'
        }
      ],
      'comulativeRating': 0,
      'maxQuantityPerUser': 2,
      'campaignEndDate': '2017-02-11T18:59:59.999Z',
      'id': '80336072d14a43628e98d89d0f460a25',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T13:39:28.897Z',
      'updatedAt': '2017-02-06T13:39:28.897Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'title7',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {/**/
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705376',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'ATITle8',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 1900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705377',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'title--9',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705378',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'title--2',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705379',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    }];

  homeProducts: Data[] = this.products;

  public getProducts(): Data[] {
    return this.products;
  }

  public getProductsById(productIds: string[]): Data[] {
    const cartProducts: Data[] = [];
    if (productIds === null) {return cartProducts; }
    for (const product of this.products) {
      for (const productId of productIds) {
        if (productId === product.id) { cartProducts.push(product); }
      }
    }
    return cartProducts;
  }

  public getProductById(id: string): Data {
    for (const product of this.products) {
      if (product.id === id) { return product; }
    }
  }

  public getPrice(productId): number {
    let amount = 0;
    for (const product of this.products) {
      if (productId === product.id) {
        const listOfPlans = product.listOfPlans;
        for (const plan of listOfPlans) {
          if (plan.price.currency === 'EUR') {
            amount = plan.price.amount;
          } else if (plan.price.currency === 'USD') {
            amount = plan.price.amount * 0.85; // 1USD = 0,85EUR
          }
        }
      }
    }
    return amount;
  }

  public getAllNames(): string[] {
    this.searchNames = [];
    for (const product of this.products) {
      this.searchNames.push(product.cardTitle);
    }
    return this.searchNames;
  }
}
