export default {
  increment(context) {
    //the name of the mutation that should be commited
    setTimeout(function() {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    context.commit('increase', payload);
  }
}
