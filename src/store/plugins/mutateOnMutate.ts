import { Store } from 'vuex'

export default (watchMutation:string, mutateMutation:string, value:any) => {
  return (store:Store<any>) => {

    store.subscribe((mutation, state) => {
      if ((mutation.type === watchMutation)) {
        store.commit(mutateMutation, value)
      }
    });

  }
}
