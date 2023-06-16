# Snake Client Project

The Snake game is an immensely popular video game that revolves around a simple concept. Players control a dot-like creature and navigate it across the screen, consuming food pieces to increase in size. However, as the creature grows longer, it becomes increasingly challenging to maneuver without colliding with the walls or its own body. The objective is to skillfully guide the creature to reach its maximum size without encountering any obstacles, as any collision results in its demise.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/taniarascia/snek). 

## Final Product

!["screenshot of the game running on the terminal. Your initials beside the snake will be passed in the as an argument on the command line terminal."](/images/Snake%20product.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command. Add your initials as an argument to show your initials on your snake e.g `node play.js LRD`

## Instructions
Use `W` `A` `S` `D` to navigate the snake up, down, left, or right. Eat the red dot to gain points. If the snake collides with the wall or its own tail, it's game over. Press CTRL + C to quit the game.

## Canned Messages
  - Press `M` to send _Hello There!_ to the screen.
  - Press `N` to send _Yippy_ to the screen.
  - PRess `B` to send _Oh no_ to the screen.

## Credit Where Credit is Due
Our server code for this game was not written from scratch. It is a heavily modified version of the single player game Snek created by Tania Rascia.