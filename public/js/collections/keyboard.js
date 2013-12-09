var app = app || {};

// remove this
var Keyboard = Backbone.Collection.extend({
    model: app.Key,

    url: 'diagram'
});

app.Keyboard = new Keyboard();

app.KeyboardView = Backbone.View.extend({
    el: $('#keyboard'),

    initialize: function () {
        this.keyboard = app.Keyboard;

        this.listenTo(this.keyboard, 'reset', this.render);
        this.keyboard.reset(this.createKeys());
    },

    createKeys: function () {
        var whiteKeyWidth = app.KeyView.whiteKeyWidth,
            blackKeyWidth = app.KeyView.blackKeyWidth,

            i = 0,
            keys = [],
            octaves = 3;

        for (var index = 0; index < 7 * octaves; index++) {
            i = keys.push(createWhiteKey(index, this.whiteKeyWidth));

            if (hasBlackKey(index)) {
                i = keys.push(createBlackKey(index, this.blackKeyWidth));
            }
        }

        return keys;

        function createWhiteKey(index) {
            return createKey(index * whiteKeyWidth, 'white');
        }

        function createBlackKey(index) {
            return createKey((index + 1) * whiteKeyWidth - blackKeyWidth / 2, 'black');
        }

        function createKey(x, color) {
            return new app.Key({
                x: x,
                color: color,
                id: i
            });
        }

        function hasBlackKey(index) {
            var i = index % 7;
            return i !== 2 && i !== 6;
        }
    },

    render: function () {
        this.keyboard.where({
            color: 'white'
        }).forEach(function (keyModel) {
            var view = new app.WhiteKeyView({
                model: keyModel
            }, keyModel.get('x'), this.model);
            this.$el.append(view.render().el);
        }, this);

        this.keyboard.where({
            color: 'black'
        }).forEach(function (keyModel) {
            var view = new app.BlackKeyView({
                model: keyModel
            }, keyModel.get('x'), this.model);
            this.$el.append(view.render().el);
        }, this);

        this.$el.width(app.Keyboard.where({
            color: 'white'
        }).length * app.KeyView.whiteKeyWidth)

        return this;
    },
});