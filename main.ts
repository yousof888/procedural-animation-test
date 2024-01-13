enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const N = SpriteKind.create()
    export const N2 = SpriteKind.create()
    export const Plant = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Current_tile = mySprite.tilemapLocation()
    if (tiles.tileAtLocationEquals(Current_tile, assets.tile`myTile3`)) {
        tiles.setTileAt(Current_tile, assets.tile`myTile5`)
    }
})
function Inventory0 () {
    Invintoryvisble = false
    controller.moveSprite(mySprite, 100, 100)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Selected_index = Math.min(Selected_index + 1, Tools.length - 1)
    mySprite.setImage(img`
        . . . . . c c c c c . . . . . . 
        . . . . . c b b b b c . . . . . 
        . . . . . 4 b f b b d c . . . . 
        . . . . 4 4 b b b d b c . . . . 
        . . . . . c d d d b b c . . . . 
        . . . . . c b c c b b c . . . . 
        . . . . . c b b b c b c . . . . 
        . . . . . c b b b c b c . . . . 
        . . . . . c b c c b b c c . . . 
        . . . . . c b b b b b b b c . . 
        . . . . . c c c c c c c c . . . 
        . . . . . 4 . . . . . 4 . . . . 
        . . . . . 4 . . . . . 4 . . . . 
        . . . 4 4 4 4 . . 4 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Selected_index = Math.max(Selected_index - 1, 0)
    mySprite.setImage(img`
        . . . . . . c c c c c . . . . . 
        . . . . . c b b b b c . . . . . 
        . . . . c d b b f b 4 . . . . . 
        . . . . c b d b b b 4 4 . . . . 
        . . . . c b b d d d c . . . . . 
        . . . . c b b c c b c . . . . . 
        . . . . c b c b b b c . . . . . 
        . . . . c b c b b b c . . . . . 
        . . . c c b b c c b c . . . . . 
        . . c b b b b b b b c . . . . . 
        . . . c c c c c c c c . . . . . 
        . . . . 4 . . . . . 4 . . . . . 
        . . . . 4 . . . . . 4 . . . . . 
        . . . 4 4 4 4 . . 4 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Invintoryvisble) {
        Inventory0()
    } else {
        Inventory1()
    }
})
function Inventory1 () {
    Invintoryvisble = true
    controller.moveSprite(mySprite, 0, 0)
    Selected_index = 0
}
spriteutils.createRenderable(100, function (screen2) {
    if (Invintoryvisble) {
        screen2.fillRect(10, 10, 140, 100, 13)
        screen2.drawRect(10, 10, 140, 100, 14)
        images.print(screen2, "Inventory", 14, 14, 15)
        images.print(screen2, Toolnames[Selected_index], 72, 14, 11)
        screen2.fillRect(14, 24, 132, 1, 15)
        Tooltop = 28
        Selected_index = 0
        for (let index = 0; index <= Tools.length - 1; index++) {
            spriteutils.drawTransparentImage(Tools.removeAt(index), screen2, 14 + index * 20, Tooltop)
        }
        spriteutils.drawTransparentImage(img`
            1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
            . . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . . 
            . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
            `, screen2, (14 + Selected_index) * 20 - 2, Tooltop - 2)
    }
})
let Tooltop = 0
let Selected_index = 0
let Invintoryvisble = false
let Current_tile: tiles.Location = null
let Toolnames: string[] = []
let Tools: Image[] = []
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . c c c c c . . . . . 
    . . . . . c b b b b c . . . . . 
    . . . . c d b b f b 4 . . . . . 
    . . . . c b d b b b 4 4 . . . . 
    . . . . c b b d d d c . . . . . 
    . . . . c b b c c b c . . . . . 
    . . . . c b c b b b c . . . . . 
    . . . . c b c b b b c . . . . . 
    . . . c c b b c c b c . . . . . 
    . . c b b b b b b b c . . . . . 
    . . . c c c c c c c c . . . . . 
    . . . . 4 . . . . . 4 . . . . . 
    . . . . 4 . . . . . 4 . . . . . 
    . . . 4 4 4 4 . . 4 4 4 4 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
Tools = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . 2 2 2 . 
    . . . . 2 6 6 6 6 6 2 . . e . . 
    . . 2 2 e 2 2 2 2 2 2 . 2 2 . . 
    . 2 . . 2 e e e 2 2 2 2 2 . . . 
    . 2 . . 2 2 2 2 2 2 2 2 . . . . 
    . 2 . . 2 2 2 2 2 2 2 . . . . . 
    . e . . 2 2 2 2 2 2 2 . . . . . 
    . . e 2 2 2 2 2 2 2 2 . . . . . 
    . . . . e 2 2 2 2 2 2 . . . . . 
    . . . . e e e e e e 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . b . . . . . . . . . . . 
    . . . . . e . . . . . . . . . . 
    . . . . . . e . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . . e . b b . . . . 
    . . . . . . . . . e b b b . . . 
    . . . . . . . . b b b b b . . . 
    . . . . . . . . c b b b b . . . 
    . . . . . . . . . c b b b . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . b b . . . . . . . . 
    . . . . . b b . . . . . . . . . 
    . . . . b b . . . . . . . . . . 
    . . . b b . . . . . . . . . . . 
    . . . b e . . . . . . . . . . . 
    . . . . . e . . . . . . . . . . 
    . . . . . . e . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . . e . . . . . . 
    . . . . . . . . . . e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 9 6 . . . . . . . 
    . . . . . 9 6 9 6 . . . . . . . 
    . . . . . 9 6 9 6 9 . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
Toolnames = [
"Watering can ",
"Shovel",
"Hoe",
"Gloves",
""
]
