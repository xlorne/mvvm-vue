import { AbsHelloAcitivity, beanFactory } from '@/components/helloWorld'

class HelloAcitivity extends AbsHelloAcitivity {
  test = (): void => {
    this.hint('123-456')
  };

  hello (): void {
    this.name = 'hello'
  }
}

export const init = () => {
  const hello = new HelloAcitivity()
  beanFactory.addBean('HelloAcitivity', hello)
}
