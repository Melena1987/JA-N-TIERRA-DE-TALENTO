import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 prose lg:prose-xl max-w-4xl">
        <h1 className="text-4xl font-bold text-[#556B2F]">Textos Legales</h1>

        <section id="aviso-legal" className="mt-12">
          <h2 className="text-3xl font-bold text-[#556B2F]">Aviso Legal</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mt-2 mb-6"></div>
          
          <p><strong>1. DATOS IDENTIFICATIVOS</strong></p>
          <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la persona titular de dominio web es Alfonso Sánchez (en adelante JAÉN, TIERRA DE TALENTO), con domicilio a estos efectos en Jaén, España. Correo electrónico de contacto: contacto@jaentalento.es del sitio web.</p>

          <p><strong>2. USUARIOS</strong></p>
          <p>El acceso y/o uso de este portal de JAÉN, TIERRA DE TALENTO atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>

          <p><strong>3. USO DEL PORTAL</strong></p>
          <p>www.jaentalento.es proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a JAÉN, TIERRA DE TALENTO o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.</p>

          <p><strong>4. PROPIEDAD INTELECTUAL E INDUSTRIAL</strong></p>
          <p>JAÉN, TIERRA DE TALENTO por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de JAÉN, TIERRA DE TALENTO o bien de sus licenciantes.</p>

          <p><strong>5. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</strong></p>
          <p>JAÉN, TIERRA DE TALENTO no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
        </section>

        <section id="politica-privacidad" className="mt-16">
          <h2 className="text-3xl font-bold text-[#556B2F]">Política de Privacidad</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mt-2 mb-6"></div>

          <p><strong>1. INFORMACIÓN AL USUARIO</strong></p>
          <p>JAÉN, TIERRA DE TALENTO, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.</p>
          <p>En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales.</p>

          <p><strong>2. DATOS RECOGIDOS, FINALIDAD Y LEGITIMACIÓN</strong></p>
          <p>Recogemos sus datos personales a través del formulario de contacto con la finalidad de gestionar su solicitud, responder a sus consultas y mantener el contacto con usted. La base legal para el tratamiento de sus datos es su consentimiento explícito que otorga al aceptar esta Política de Privacidad antes de enviar/marcar la casilla correspondiente.</p>
          
          <p><strong>3. PLAZOS DE CONSERVACIÓN</strong></p>
          <p>Conservaremos sus datos personales desde que nos dé su consentimiento hasta que lo revoque o bien solicite la limitación del tratamiento. En tales casos, mantendremos sus datos de manera bloqueada durante los plazos legalmente exigidos.</p>

          <p><strong>4. DERECHOS DE LOS INTERESADOS</strong></p>
          <p>Como interesado, puede ejercer los siguientes derechos:</p>
          <ul>
            <li>Derecho de acceso a sus datos personales.</li>
            <li>Derecho de rectificación de los datos inexactos.</li>
            <li>Derecho de supresión de sus datos.</li>
            <li>Derecho a la limitación del tratamiento de sus datos.</li>
            <li>Derecho a oponerse al tratamiento de sus datos.</li>
            <li>Derecho a la portabilidad de sus datos.</li>
          </ul>
          <p>Puede ejercer sus derechos enviando una solicitud por escrito a la dirección de correo electrónico contacto@jaentalento.es, indicando el derecho que desea ejercer.</p>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;