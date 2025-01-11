
namespace images {
    
    //%blockid=img_findimg
    //%block="find index $inimg in $arrimg in $percent chance"
    //%percent.min=1 percent.max=100 percent.defl=50
    //%arrimg.shadow="lists_create_with" arrimg.defl="screen_image_picker"
    //%inimg.shadow="screen_image_picker"
    //%group="find image index"
    //%weight=10
    //%inlineInputMode=inline
    export function find(inimg:Image,arrimg:Image[],percent:number=50) {
        let nv = 0,anv = 0
        let uimg: Image = null
        percent = ((percent - 1) % 100) + 1
        while (percent > 0) {
            if (percent <= 0) break;
            for (let i = 0;i < arrimg.length;i++) {
                nv = 0
                uimg = arrimg[i]
                if (uimg.width != inimg.width || uimg.height != inimg.height) return -1;
                for (let x = 0;x < inimg.width;x++) {
                    for (let y = 0;y < inimg.height;y++) {
                        if (uimg.getPixel(x,y) == inimg.getPixel(x,y)) {nv += 1}
                    }
                }
                anv = Math.map(nv, 0, (inimg.width*inimg.height), 0, 100)
                if (anv > percent) return i;
            }
            percent -= 1
        }
        return -1
    }
}
