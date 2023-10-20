var log = 'looger file';
console.log(`Message from ${log}`);

function logging(msg) {
    // Your logic here...
    console.log(msg);
}
module.exports.log = logging;
