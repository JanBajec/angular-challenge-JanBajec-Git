import {Price} from './price';
import {Schedule} from './schedule';
import {Period} from './period';

export class Plans {
  planType?: string;
  planName?: string;
  planDescription?: string;
  price: Price;
  isShippingChargesRequired?: boolean;
  shippingCharges?: Price;
  startsOn?: string;
  endsOn?: string;
  displayPrice?: Price;
  displayPriceUnit?: string;
  displayPriceNotes?: string;
  invoicingCylcle?: string;
  subsciptionSchedule?: Schedule;
  subscriptionPeriod?: Period;
  appliesTo?: string;
  noOfAllowedUsers?: number;
  minSubPeriod?: Period;
  freeTrialPeriod?: Period;
  id?: string;
}
