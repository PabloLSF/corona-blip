module.exports = {
    convert: function(rows) {
        var brasil;
        for(var i = 0; i < rows.length; i++) {
            
            if(rows[i].country_abbreviation == 'BR') {
                
                brasil = rows[i];
            }
        }
        return brasil
    }
}