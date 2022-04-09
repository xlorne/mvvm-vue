import { reactive } from 'vue'
import { beanFactory } from '@/lib'
export * from '@/lib'
export abstract class AbsHelloAcitivity {
  name: string

  abstract test():void

  abstract hello():void

  hint (str:string) {
    alert(str)
  }

  constructor () {
    this.name = 'this is a name '
  }
}

export const initBean = () => {
  // register HelloAcitivity Bean
  return reactive(beanFactory.getBean('HelloAcitivity'))
}
