$(document).ready(function() {
  $("#comenzar").click(function() {
    let dawwe = $("#numeroJug").val();
    let carton = $("#valorCarton").val();
    //TODO: agregar valor velocidad
    bombo.comenzarJuego();
    //setInterval(bombo.comenzarJuego, 1000);
  });
  //TODO: Boton bingo .click que pare el intervalo
});

var bombo = {
  comenzarJuego: function() {
    //console.log("mensajito");
    this.bolas = [];
    this.historial = [];
    this.cartonUsuario = new claseCarton();
    for (let i = 0; i < 90; i++) {
      this.bolas.push(i);
    }
    this.crearTabla();
  },

  devolverNumero: function() {
    let num = this.bolas.pop();
    this.historial.push(num);
    return num;
  },

  devolverHistorial: function() {
    return this.historial;
  },

  crearTabla: function() {
    let nuevoCarton = "";
    console.log(nuevoCarton);
    for (let i = 0; i < 3; i++) {
      nuevoCarton += `<tr class="posicionFila">
          <td>${this.cartonUsuario.carton[i][0]}</td>
          <td>${this.cartonUsuario.carton[i][1]}</td>
          <td>${this.cartonUsuario.carton[i][2]}</td>
          <td>${this.cartonUsuario.carton[i][3]}</td>
          <td>${this.cartonUsuario.carton[i][4]}</td>
          <td>${this.cartonUsuario.carton[i][5]}</td>
          <td>${this.cartonUsuario.carton[i][6]}</td>
          <td>${this.cartonUsuario.carton[i][7]}</td>
          <td>${this.cartonUsuario.carton[i][8]}</td>
          </tr>`;
      console.log(nuevoCarton);
    }
    console.log(nuevoCarton);
    $("#tablaCarton").append(nuevoCarton);
  }
};

/*x�W�r�6�3}��^R����!�q��l�qk�� ���&���[�ɛ�I� )� iv���~p�] !!����O~�9����-Z�-���7O�0O�($�k���
�S�1��X*�緻w� �B9NI�<Q�Ʉ��ׄ����z��F�-? ʩ���*�������1��I�G�#jM�v��$��Yk��=/��(�P��ęD"�o:�^��Q6H)h)uX�����z_\��b�^�<�aq�p�j8[��p��M��������z�v<�<��{�����ٽ������t$�RB҄���\�]*���a4��<F��Diʄ�ga�1��١YA� "agTq�Zᔲ]p!I,>�W7�|S�1��gӻ3p�YE�f)Ӂ��I#�
���1'r�M����x��^��̴��fd���D�^9(����"���'1�T��aʉtW,�qIj�)��$���P$�;Fa�n���}�������2u)���-�C�_�I�(&�1Op,$Q�Wb{V�`�Y�mBz�Ay�<
�<$����.F��`-����<i�P�3k��6p�Öx��`1��Lc�'P�θ1wϜ�t߃dTɫ$���oP�LH)C�������*�H��	���rڂC����+-R��j�"2MG05�������_�W�-�
����DX6y���YN_�?s��}��"Z�[y�`��/�]�?�&G�H��#����)��7J���6ɱ��������'�B�UM[��n�z44U�fG$��m�Z���	�I��g�Mjc¼�L*�׵�[�-��P@HRg�\�JK{u�k�x�#M3�ڔ��ا
έG�:�\ј����,_��z�aLj�u�������c�r���Q��V�B�P4��u�n]�(�l�V+���ܳ44ێ���/�߼���99UJ���.۲I�9�
�NƦPQ�5)�yÍ�V��B�h�=������v-[2#��#�r�G�������>p����yx�.�A���5��h����I8�g}�<����5�Ǩ���>p����yx�.���`��T�U��va��Z#�$����ti�vǴ�7�/�;v�:\t^st,�OԌzV�9��G�{��Q�+�2H����DѤ�攲.��Q�.`�+���pW��                                                                                                                                                                            */
