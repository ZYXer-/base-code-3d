function Map() {

    this.radius = 0;
    this.size = 0;
    this.tiles = [];

    this.init = function (radius) {
        this.size = radius * 2 - 1;
        this.radius = radius
        for (var x = 0; x < this.size; x++) {
            this.tiles[x] = [];
            for (var y = 0; y < this.size; y++) {
                var tile = new Tile();
                tile.init(x, y, this);
                this.tiles[x][y] = tile;
            }

        }
    };


    this.setTile = function (x, y, tile) {
        if (!this.doesTileExist(x, y)) {
            return false;
        }
        this.tiles[x][y] = tile;

    };


    this.getTile = function (x, y) {
        if (!this.doesTileExist(x, y)) {
            return false;
        }

        return this.tiles[x][y];
    };


    //this.getDistance(tile1, tile2)


    this.doesTileExist = function (x, y) {
        if ( x < 0 || x >= this.size){
            return false;
        }

        var emptyTilesTop = Math.floor(Math.abs(x - this.radius) / 2);
        var emptyTilesBottom = Math.ceil(Math.abs(x - this.radius) / 2);
        return y >= emptyTilesBottom && y < this.size - emptyTilesBottom;
    };


    this.getAdjacentTiles = function (x, y, radius) {
        if (!this.doesTileExist(x, y)) {
            return [];
        }

        var includeHalf = radius - Math.floor(radius) != 0;
        radius = Math.floor(radius);
        var results = [];
        var odd = x % 2 == 1;

        var startX = limit(x - radius, 0, this.size-1);
        var endX = limit(x + radius, 0, this.size-1);

        for (var indexX = startX; indexX < endX; indexX++) {
            var emptyTilesTop;
            var emptyTilesBottom;
            if (odd){
                emptyTilesTop = Math.floor(Math.abs(indexX - x) / 2);
                emptyTilesBottom = Math.ceil(Math.abs(indexX - x) / 2);
            }
            else {
                emptyTilesTop = Math.ceil(Math.abs(indexX - x) / 2);
                emptyTilesBottom = Math.floor(Math.abs(indexX - x) / 2);
            }

            var startY = limit(y - (radius - emptyTilesTop), 0, this.size-1);
            var endY = limit(y + (radius - emptyTilesBottom), 0, this.size-1);
            for (var indexY = startY; indexY <= endY; indexY++) {
                results.push(this.getTile(indexX, indexY));
            }
        }

    };
}

Map.RANGE_0 = 0;
Map.RANGE_1_0 = 1;
Map.RANGE_1_5 = 2;
Map.RANGE_2_0 = 3;
Map.RANGE_2_5 = 4;
Map.RANGE_3_0 = 5;
Map.RANGE_3_5 = 6;
Map.RANGE_4_0 = 7;
Map.RANGE_4_5 = 8;
Map.RANGE_5_0 = 9;
Map.RANGE_5_5 = 10;
Map.RANGE_6_0 = 11;

