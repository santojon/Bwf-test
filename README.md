## Bwf (Beowulf)

A tool to define javascript classes easily.   
Example:

```java
new Bwf(
    'Dashboard: {
        name: string,
        tiles: list,
        base: string,
        extras: object
    }'
);
```

Will be a class, defined in page scope.

### Example app

This is an example app too.   
Here we have an structure with ```base.js``` and ```app.js```, to load all app programatically.

- Simple HTML page
- Bwf and 'base' as lib
- Controllers using Bwf
- App auto loading ***styles****(css)* and ***controllers***
- 'Database' like functionalities (with 'ORM') using ***Bhdr (Brynhildr)*** as datapool
