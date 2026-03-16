# Start The Show

## Setting

This game takes place at the Thomas Jefferson Community Theater. I tried to faithfully recreate the backstage areas.

## Map

```mermaid
graph TD;
    outside(((Outside)))-->WellsRight;
    WellsRight-->Catwalk;
    Flys-->StageRight;
    StageRight-->WellsRight;
    StageRight-->Stage;
    Stage-->StageLeft;
    StageLeft-->WellsLeft;
    WellsLeft-->Downstairs;
    WellsRight-->Downstairs;
```

The player starts just outside the theater, and then walks into the building. They can explore, but must complete all of their objectives within the hour to have a successful show.

## Story

The player chooses to play as a techie or an actor. 

Techies must find a roll of gaff tape, turn on the light board, set for top of show, and chat with their friend.

Actors must find their two props, get into costume, get into mics, and chat with their friend.

All of the player's objectives must be completed within 1 hour. Different actons take different amounts of time (ex. set for top of show takes 10 minutes, moving between locations takes 1 minute).

## Global Variables

