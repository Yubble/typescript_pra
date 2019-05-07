function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName(function () {
    return 'this is fn';
}));
