import { Store } from 'vuex'

let timeout:number = setInterval(() => {});

export default (watchMutation:string, value:any, timeoutDuration:number) => {
  return (store:Store<any>) => {

    store.subscribe((mutation) => {
      if ((mutation.type === watchMutation && mutation.payload !== value)) {
        clearInterval(timeout);
      }
    });
    
    timeout = setInterval(() => {
      console.log('resetOnDelay', watchMutation, value)
      store.commit(watchMutation, value)
    }, timeoutDuration)
    
  }
}
