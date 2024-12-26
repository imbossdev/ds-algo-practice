function reverse(Str) {
  backwords = [];
  for (let i = Str.length - 1; i >= 0; i--) {
    backwords.push(Str[i]);
  }
  return backwords.join("");
}

const s = reverse("Hi My name is Andrei");
console.log(s);

//Hi My name is Andrei
//ierdnA si eman yM iH