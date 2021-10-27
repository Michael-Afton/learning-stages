controller.player2.onEvent(ControllerEvent.Connected, function () {
    controller.player2.moveSprite(mySprite2)
    projectile = sprites.createProjectileFromSprite(assets.image`blue fire ball`, mySprite2, 2, 3)
    projectile.follow(mySprite, 80)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("you see, you will never win space creature!!!")
    game.splash("(unidentified alien language)")
    mySprite.destroy()
    mySprite2.destroy()
    projectile.destroy()
    mySprite3 = sprites.create(assets.image`big alien death creature`, SpriteKind.Player)
    game.over(false)
})
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
controller.moveSprite(mySprite)
controller.moveSprite(mySprite2)
mySprite = sprites.create(assets.image`space invader`, SpriteKind.Enemy)
mySprite.setStayInScreen(true)
mySprite.setPosition(65, 20)
mySprite.setVelocity(2, 2)
mySprite2 = sprites.create(assets.image`invader destroyer mock 2`, SpriteKind.Player)
mySprite2.setStayInScreen(true)
mySprite.setPosition(50, 91)
mySprite.setVelocity(50, 50)
controller.player1.moveSprite(mySprite)
