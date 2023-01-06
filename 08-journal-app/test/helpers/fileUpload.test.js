import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'da3buodin',
    api_key: '212797264124449',
    api_secret: 'XPa_myyO74-o3ajbrN_Fd1H3mVo',
    secure: true
});

describe('Pruebas en FileUpload', () => {

    test('Debe de subir el archivo correctamente a cloudinary', async () => {

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ajktv_a-tYJmytJMKxoPBb6_wfWfE1HWXg&usqp=CAU';

        const resp = await fetch(imageUrl);
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // console.log(url);

        const segments = url.split( '/' );

        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

        await cloudinary.api.delete_resources([ `journal/${imageId}` ], {
            resource_type: 'image'
        });

    });


    test('Debe de retornar null', async () => {

        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);

        expect(url).toBe(null);

    })

})

