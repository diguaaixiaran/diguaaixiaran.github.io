var botui = new BotUI('botui-app') // id of container
botui.message.bot({ // show first message
    delay: 200,
    content: '你好，远方陌生人'
}).then(() => {
    return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: '我是辉辉，也可以叫我huihui'
    })
}).then(() => {
    return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: '一个帅气的蓝孩子'
    })
}).then(() => {
    return botui.action.button({ // let the user perform an action
        delay: 1000,
        action: [{
            text: '然后呢😊',
            value: 'sure'
        }, {
            text: '别废话😒',
            value: 'skip'
        }]
    })
}).then(function(res) {
    if (res.value == 'sure') {
        tutorial();
    }
    if (res.value == 'skip') {
        return botui.message.add({
            delay: 1500,
            content: '![大坏蛋](https://img.huihuige.xyz/images/2021/12/13/72e60961abe9819243e5c1c38a6419da.jpg)'
        });
        end();
    }
});
var tutorial = function() {
    botui.message.add({
        delay: 1000,
        content: '太棒了，让我们简单互动一下吧。'
    }).then(function() {
        return botui.message.add({
            delay: 1000,
            content: '请问我女朋友是谁？（输入名字后按回车键！）'
        });
    }).then(function() {
        return botui.action.text({
            delay: 800,
            action: {
                value: '新垣结衣',
                placeholder: 'huihui的女朋友'
            }
        }).then(function(res) {
            if (res.value == '新垣结衣') {
                girlfriend();
            }
            if (res.value != '新垣结衣') {
                return botui.message.add({
                    delay: 1500,
                    content: '为什么不相信我，看来老夫只能看破红尘！😢'
                }).then(function() {
                    return botui.message.add({
                        delay: 1000,
                        content: '![结衣](https://img.huihuige.xyz/images/2022/02/12/3f791fca358861674eaf3623aa0c56df.gif)'
                    });
                })
                end();
            }
        });
    });
    var girlfriend = function() {
        botui.message.add({
            delay: 1000,
            content: '![新垣结衣](https://img.huihuige.xyz/images/2022/02/12/gakki.md.jpg)'
        }).then(function() {
            return botui.message.add({
                delay: 1000,
                content: '怎么样，我女朋友漂亮吧😄'
            });
        });
    };
}