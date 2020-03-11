import { Pipe, PipeTransform } from '@angular/core';
import { Product} from '../app/model/product.model'
@Pipe({
    name: 'searchFilterPipe'
})

export class SearchPipe implements PipeTransform {
    transform(products:Product[],searchTerm:string): Product[] {

      if(!products||!searchTerm){
        return products;
      }
      return products.filter(products=>products.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
}