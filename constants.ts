
import { Module, QuestionType } from './types';

export const MODULES: Module[] = [
  {
    id: 'm1',
    title: 'Comunicación',
    description: 'Fundamentos del proceso comunicativo, funciones del lenguaje y vicios de dicción.',
    color: 'bg-blue-500',
    lessons: [
      {
        id: 'l1-1',
        title: 'Proceso y elementos de la comunicación',
        content: [
          { type: 'paragraph', text: 'La comunicación es un proceso de intercambio de información entre dos o más participantes. Para que ocurra, se necesitan varios elementos clave.' },
          { type: 'subtitle', text: 'Elementos clave:' },
          { type: 'list', text: [
              'Emisor: Quien origina y envía el mensaje.',
              'Receptor: Quien recibe e interpreta el mensaje.',
              'Mensaje: La información que se transmite.',
              'Código: El sistema de signos utilizado (ej. el idioma español).',
              'Canal: El medio físico por el cual se transmite el mensaje (ej. el aire, un papel, internet).',
              'Contexto: La situación o circunstancias en las que se produce la comunicación.'
            ]
          },
          { type: 'subtitle', text: 'Ejemplo práctico:' },
          { type: 'paragraph', text: 'Ana le envía un correo electrónico a su jefe, Carlos, para informarle que ha terminado el reporte. En este caso:'},
          { type: 'list', text: [
              'Emisor: Ana',
              'Receptor: Carlos',
              'Mensaje: "He terminado el reporte."',
              'Código: Idioma español escrito.',
              'Canal: Internet (a través del correo electrónico).',
              'Contexto: Laboral, entrega de una tarea asignada.'
            ]
          }
        ]
      },
      {
        id: 'l1-2',
        title: 'Funciones del lenguaje',
        content: [
            { type: 'paragraph', text: 'Cada vez que nos comunicamos, lo hacemos con una intención. Estas intenciones se conocen como funciones del lenguaje.' },
            { type: 'subtitle', text: 'Funciones principales:' },
            { type: 'list', text: [
                'Informativa o referencial: Transmitir información objetiva. Ejemplo: "La capital de Francia es París."',
                'Emotiva o expresiva: Expresar sentimientos o emociones del emisor. Ejemplo: "¡Qué alegría verte!"',
                'Apelativa o conativa: Influir en el receptor para que actúe de una forma. Ejemplo: "Por favor, cierra la puerta."',
                'Poética o estética: Centrarse en la belleza del mensaje. Se usa en literatura. Ejemplo: "El sol es un globo de fuego, la luna es un disco morado."',
                'Fática: Iniciar, mantener o finalizar una conversación. Ejemplo: "Hola, ¿me escuchas?"',
                'Metalingüística: Hablar sobre el propio lenguaje. Ejemplo: "La palabra \'casa\' es un sustantivo."',
              ]
            }
        ]
      },
      {
        id: 'l1-3',
        title: 'Vicios de dicción',
        content: [
          { type: 'paragraph', text: 'Los vicios de dicción son formas incorrectas de construcción o empleo de vocablos, que pueden dificultar la comprensión de un mensaje.' },
          { type: 'subtitle', text: 'Ejemplos comunes:' },
          { type: 'list', text: [
              'Barbarismo: Pronunciar o escribir mal las palabras. Incorrecto: "inaguración". Correcto: "inauguración".',
              'Dequeísmo: Usar "de que" incorrectamente. Incorrecto: "Pienso de que está mal". Correcto: "Pienso que está mal".',
              'Queísmo: Omitir la preposición "de" antes de "que". Incorrecto: "Me di cuenta que era tarde". Correcto: "Me di cuenta de que era tarde".',
              'Muletillas: Palabras o frases que se repiten por hábito. Ejemplo: "o sea", "este...", "pues".',
              'Pleonasmo: Usar palabras innecesarias que no añaden información. Ejemplo: "subir para arriba" o "salir para afuera".'
            ]
          }
        ]
      }
    ],
    quizzes: [
      {
        id: 'q1-1',
        title: 'Quiz de comunicación',
        questions: [
          {
            id: 'q1-1-1',
            type: QuestionType.MultipleChoice,
            questionText: 'En una conversación telefónica, ¿cuál es el canal?',
            options: ['El idioma', 'El teléfono', 'El tema de conversación', 'La persona que escucha'],
            correctAnswer: 'El teléfono',
            explanation: 'El canal es el medio físico a través del cual viaja el mensaje. En este caso, es el teléfono.'
          },
          {
            id: 'q1-1-2',
            type: QuestionType.Written,
            questionText: 'Corrige la siguiente oración que contiene un vicio de dicción: "Me dijistes que vendrías temprano."',
            correctAnswer: 'Me dijiste que vendrías temprano.',
            explanation: 'El vicio es un barbarismo (dijistes). La forma correcta del verbo en segunda persona del singular en pretérito es "dijiste", sin la "s" final.'
          },
           {
            id: 'q1-1-3',
            type: QuestionType.MultipleChoice,
            questionText: '¿Qué elemento de la comunicación se encarga de decodificar el mensaje?',
            options: ['Emisor', 'Canal', 'Receptor', 'Código'],
            correctAnswer: 'Receptor',
            explanation: 'El receptor es quien recibe el mensaje y lo interpreta o decodifica para comprenderlo.'
          },
          {
            id: 'q1-1-4',
            type: QuestionType.MultipleChoice,
            questionText: 'La oración "¡Qué día tan maravilloso!" cumple principalmente con la función:',
            options: ['Apelativa', 'Informativa', 'Fática', 'Emotiva'],
            correctAnswer: 'Emotiva',
            explanation: 'La función emotiva o expresiva se centra en manifestar los sentimientos y emociones del emisor.'
          },
          {
            id: 'q1-1-5',
            type: QuestionType.Written,
            questionText: 'Identifica y corrige el vicio de dicción en: "Pienso de que deberíamos irnos ya".',
            correctAnswer: 'Pienso que deberíamos irnos ya.',
            explanation: 'Esto es un caso de dequeísmo, el uso incorrecto de la preposición "de" antes de "que".'
          },
          {
            id: 'q1-1-6',
            type: QuestionType.MultipleChoice,
            questionText: 'Cuando un profesor explica qué es un adjetivo, ¿qué función del lenguaje predomina?',
            options: ['Poética', 'Metalingüística', 'Apelativa', 'Emotiva'],
            correctAnswer: 'Metalingüística',
            explanation: 'La función metalingüística se utiliza para hablar del propio código o lenguaje.'
          },
          {
            id: 'q1-1-7',
            type: QuestionType.Written,
            questionText: 'Un cartel que dice "Prohibido fumar" es un ejemplo de comunicación con función principalmente...',
            correctAnswer: 'Apelativa',
            explanation: 'La función apelativa o conativa busca influir en la conducta del receptor, en este caso, que no fume.'
          },
          {
            id: 'q1-1-8',
            type: QuestionType.MultipleChoice,
            questionText: 'El sistema de signos que usan el emisor y el receptor se llama:',
            options: ['Canal', 'Mensaje', 'Contexto', 'Código'],
            correctAnswer: 'Código',
            explanation: 'El código es el conjunto de signos (como un idioma) que debe ser compartido por emisor y receptor para que la comunicación sea posible.'
          },
          {
            id: 'q1-1-9',
            type: QuestionType.Written,
            questionText: '¿Qué vicio de dicción encuentras en "Lo vi con mis propios ojos"?',
            correctAnswer: 'Pleonasmo',
            explanation: 'Es un pleonasmo o redundancia, ya que es obvio que se ve con los ojos. Bastaría con decir "Lo vi".'
          },
          {
            id: 'q1-1-10',
            type: QuestionType.MultipleChoice,
            questionText: 'En un noticiero, el presentador informa sobre el clima. La función del lenguaje que predomina es:',
            options: ['Fática', 'Informativa', 'Poética', 'Apelativa'],
            correctAnswer: 'Informativa',
            explanation: 'La función informativa o referencial se usa para transmitir datos y hechos objetivos.'
          }
        ]
      }
    ]
  },
  {
    id: 'm3',
    title: 'Ortografía',
    description: 'Reglas de acentuación, uso de mayúsculas, puntuación y más para una escritura impecable.',
    color: 'bg-green-500',
    lessons: [
      {
        id: 'l3-1',
        title: 'Reglas generales de acentuación',
        content: [
          { type: 'paragraph', text: 'La tilde (´) se usa en español para marcar la sílaba tónica en ciertas palabras, siguiendo reglas específicas.' },
          { type: 'subtitle', text: 'Clasificación de palabras:' },
          { type: 'list', text: [
              'Agudas: La sílaba tónica es la última. Llevan tilde si terminan en n, s o vocal. Ejemplos: corazón, compás, bebé, comió.',
              'Graves (o llanas): La sílaba tónica es la penúltima. Llevan tilde si NO terminan en n, s o vocal. Ejemplos: árbol, lápiz, fácil, césped.',
              'Esdrújulas: La sílaba tónica es la antepenúltima. Siempre llevan tilde. Ejemplos: teléfono, música, esdrújula, simpático.',
              'Sobresdrújulas: La sílaba tónica es anterior a la antepenúltima. Siempre llevan tilde. Ejemplos: dígamelo, fácilmente, cómpratelo.'
            ]
          }
        ]
      },
      {
        id: 'l3-2',
        title: 'Tilde diacrítica y casos especiales',
        content: [
          { type: 'paragraph', text: 'La tilde diacrítica se usa para diferenciar palabras que se escriben igual pero tienen significados o funciones gramaticales distintas.' },
          { type: 'subtitle', text: 'Pares comunes:' },
          { type: 'list', text: [
              'él (pronombre personal) / el (artículo): "Él llegó." / "El perro ladra."',
              'tú (pronombre personal) / tu (adjetivo posesivo): "¿Tú vienes?" / "Tu casa es grande."',
              'mí (pronombre personal) / mi (adjetivo posesivo): "Es para mí." / "Mi amigo es alto."',
              'sé (verbo ser o saber) / se (pronombre): "Ya sé la verdad." / "Se fue temprano."',
              'sí (afirmación, pronombre) / si (condicional): "Sí, quiero." / "Si vienes, te espero."',
              'dé (verbo dar) / de (preposición): "Que te dé suerte." / "Vaso de vidrio."',
              'té (bebida) / te (pronombre): "Quiero un té." / "Te lo dije."',
              'más (adverbio de cantidad) / mas (conjunción, equivale a "pero"): "Quiero más." / "Vino, mas no lo vi."'
            ]
          }
        ]
      }
    ],
    quizzes: [
      {
        id: 'q3-1',
        title: 'Quiz de acentuación',
        questions: [
          {
            id: 'q3-1-1',
            type: QuestionType.MultipleChoice,
            questionText: '¿Cuál de las siguientes palabras es grave y lleva tilde?',
            options: ['Corazon', 'Dificil', 'Reloj', 'Camion'],
            correctAnswer: 'Dificil',
            explanation: '"Difícil" es una palabra grave porque su sílaba tónica es la penúltima (fi). Lleva tilde porque no termina en n, s, o vocal.'
          },
          {
            id: 'q3-1-2',
            type: QuestionType.MultipleChoice,
            questionText: 'La palabra "rapidamente" es:',
            options: ['Aguda', 'Grave', 'Esdrújula', 'Sobresdrújula'],
            correctAnswer: 'Sobresdrújula',
            explanation: 'Los adverbios terminados en "-mente" conservan la tilde del adjetivo original. "Rápida" es esdrújula, por lo que "rápidamente" es sobresdrújula y siempre lleva tilde.'
          },
          {
            id: 'q3-1-3',
            type: QuestionType.Written,
            questionText: 'Coloca la tilde donde sea necesario en la siguiente palabra: "examenes".',
            correctAnswer: 'exámenes',
            explanation: 'La palabra "exámenes" es esdrújula, por lo que su sílaba tónica (xa) siempre debe llevar tilde.'
          },
          {
            id: 'q3-1-4',
            type: QuestionType.MultipleChoice,
            questionText: 'Elige la oración escrita correctamente.',
            options: [
              'Aun no ha llegado.', 
              'Aún no ha llegado.', 
              'El llego sin tu.', 
              'Te sirvo un te.'
            ],
            correctAnswer: 'Aún no ha llegado.',
            explanation: '"Aún" lleva tilde cuando equivale a "todavía". "Te" (pronombre) no lleva tilde, pero "té" (bebida) sí. "El" (artículo) y "tu" (posesivo) no llevan tilde en este contexto.'
          },
          {
            id: 'q3-1-5',
            type: QuestionType.MultipleChoice,
            questionText: 'La palabra "heroe" debe llevar tilde porque es...',
            options: ['Aguda terminada en vocal', 'Grave que no termina en n, s, o vocal', 'Esdrújula', 'Un caso de hiato'],
            correctAnswer: 'Esdrújula',
            explanation: 'La palabra es "hé-ro-e". La sílaba tónica es la antepenúltima, por lo tanto es esdrújula y siempre lleva tilde.'
          },
          {
            id: 'q3-1-6',
            type: QuestionType.Written,
            questionText: 'Escribe la palabra correcta para completar la frase: "No ___ por qué no vienes".',
            correctAnswer: 'sé',
            explanation: '"Sé" del verbo saber siempre lleva tilde para diferenciarlo del pronombre "se".'
          },
          {
            id: 'q3-1-7',
            type: QuestionType.MultipleChoice,
            questionText: '¿Cuál de estas palabras es aguda y NO lleva tilde?',
            options: ['Panel', 'Cafe', 'Pared', 'Compas'],
            correctAnswer: 'Pared',
            explanation: '"Pared" es aguda porque la fuerza de voz está en la última sílaba, pero no lleva tilde porque no termina en "n", "s" o vocal.'
          },
          {
            id: 'q3-1-8',
            type: QuestionType.MultipleChoice,
            questionText: 'En la frase "Para mi, es importante", ¿qué palabra está mal acentuada?',
            options: ['Para', 'mi', 'es', 'importante'],
            correctAnswer: 'mi',
            explanation: 'Debería ser "mí" con tilde, ya que es un pronombre personal ("para mí"). "mi" sin tilde es un adjetivo posesivo ("mi casa").'
          },
          {
            id: 'q3-1-9',
            type: QuestionType.Written,
            questionText: '¿La palabra "construir" lleva tilde?',
            correctAnswer: 'No',
            explanation: 'Es una palabra aguda terminada en "r", por lo que no lleva tilde según las reglas generales.'
          },
          {
            id: 'q3-1-10',
            type: QuestionType.MultipleChoice,
            questionText: 'Selecciona la opción correcta.',
            options: ['Quiero mas comida.', 'Quiero más comida.', 'Vino, más no me saludo.', 'Vino, más no me saludó.'],
            correctAnswer: 'Quiero más comida.',
            explanation: '"Más" de cantidad lleva tilde. "mas" como sinónimo de "pero" no lleva tilde.'
          }
        ]
      }
    ]
  },
   {
    id: 'm4',
    title: 'Gramática y vocabulario',
    description: 'Analiza la estructura de las oraciones y expande tu repertorio de palabras.',
    color: 'bg-yellow-500',
    lessons: [
      {
        id: 'l4-1',
        title: 'La oración: sujeto y predicado',
        content: [
          { type: 'paragraph', text: 'La oración es la unidad mínima de comunicación con sentido completo. Generalmente, se divide en dos partes fundamentales: sujeto y predicado.' },
          { type: 'subtitle', text: 'Partes de la oración:' },
          { type: 'list', text: [
              'Sujeto: Es de quien o de lo que se habla en la oración. Para encontrarlo, preguntamos al verbo: ¿quién? o ¿quiénes? El núcleo del sujeto suele ser un sustantivo o un pronombre.',
              'Predicado: Es todo lo que se dice del sujeto. Su núcleo es siempre un verbo conjugado.'
            ]
          },
          { type: 'subtitle', text: 'Ejemplo analizado:' },
          { type: 'paragraph', text: 'En la oración "El perro marrón corre por el parque":'},
          { type: 'list', text: [
              'Preguntamos: ¿Quién corre por el parque? -> Respuesta: "El perro marrón". Este es el Sujeto.',
              'El resto de la oración es el Predicado: "corre por el parque".',
              'Núcleo del Sujeto: "perro" (sustantivo).',
              'Núcleo del Predicado: "corre" (verbo).'
            ]
          }
        ]
      },
      {
        id: 'l4-2',
        title: 'Categorías gramaticales',
        content: [
          { type: 'paragraph', text: 'Las palabras se clasifican en diferentes categorías según su función en la oración. Conocerlas es clave para analizar textos.' },
          { type: 'subtitle', text: 'Principales categorías:' },
          { type: 'list', text: [
              'Sustantivo: Nombra personas, animales, cosas, lugares, ideas (ej. niño, mesa, felicidad).',
              'Adjetivo: Describe al sustantivo, le da una cualidad (ej. grande, rojo, inteligente).',
              'Verbo: Expresa acciones, estados o procesos (ej. correr, ser, pensar).',
              'Adverbio: Modifica a un verbo, un adjetivo u otro adverbio (ej. rápidamente, muy, aquí).',
              'Pronombre: Sustituye al sustantivo (ej. él, ella, nosotros, eso).',
              'Artículo: Precede al sustantivo (ej. el, la, un, unas).',
              'Preposición: Une palabras o frases, indicando relación (ej. a, de, con, para, en).',
              'Conjunción: Enlaza palabras u oraciones (ej. y, pero, o, porque).'
            ]
          }
        ]
      }
    ],
    quizzes: [
      {
        id: 'q4-1',
        title: 'Quiz de gramática básica',
        questions: [
          {
            id: 'q4-1-1',
            type: QuestionType.Written,
            questionText: '¿Cuál es el sujeto en la oración "Mi hermana pequeña juega en el jardín"?',
            correctAnswer: 'Mi hermana pequeña',
            explanation: 'Al preguntar "¿quién juega en el jardín?", la respuesta y por tanto el sujeto es "Mi hermana pequeña".'
          },
          {
            id: 'q4-1-2',
            type: QuestionType.MultipleChoice,
            questionText: 'En "El coche rojo es muy rápido", la palabra "rojo" es un:',
            options: ['Sustantivo', 'Adverbio', 'Adjetivo', 'Verbo'],
            correctAnswer: 'Adjetivo',
            explanation: 'Un adjetivo es una palabra que describe o califica a un sustantivo. "Rojo" describe al "coche".'
          },
          {
            id: 'q4-1-3',
            type: QuestionType.MultipleChoice,
            questionText: '¿Cuál es el núcleo del predicado en "Nosotros estudiamos para el examen"?',
            options: ['Nosotros', 'examen', 'para', 'estudiamos'],
            correctAnswer: 'estudiamos',
            explanation: 'El núcleo del predicado es siempre el verbo principal de la oración, en este caso, "estudiamos".'
          },
          {
            id: 'q4-1-4',
            type: QuestionType.Written,
            questionText: 'Identifica la categoría gramatical de la palabra "rápidamente".',
            correctAnswer: 'Adverbio',
            explanation: 'Es un adverbio de modo. Las palabras terminadas en "-mente" suelen ser adverbios.'
          },
          {
            id: 'q4-1-5',
            type: QuestionType.MultipleChoice,
            questionText: 'En la oración "Ella lo compró", la palabra "lo" es un:',
            options: ['Artículo', 'Pronombre', 'Sustantivo', 'Conjunción'],
            correctAnswer: 'Pronombre',
            explanation: '"lo" es un pronombre personal que sustituye al objeto que fue comprado (ej. el libro, el coche).'
          },
          {
            id: 'q4-1-6',
            type: QuestionType.Written,
            questionText: '¿Cuál es el predicado en "El sol brilla con fuerza"?',
            correctAnswer: 'brilla con fuerza',
            explanation: 'El predicado es todo lo que se dice del sujeto ("El sol").'
          },
          {
            id: 'q4-1-7',
            type: QuestionType.MultipleChoice,
            questionText: '¿Qué tipo de palabra es "y" en "Juan y María"?',
            options: ['Preposición', 'Adverbio', 'Conjunción', 'Interjección'],
            correctAnswer: 'Conjunción',
            explanation: 'Las conjunciones como "y", "o", "pero" sirven para enlazar palabras u oraciones.'
          },
          {
            id: 'q4-1-8',
            type: QuestionType.MultipleChoice,
            questionText: 'En "La casa de madera", la palabra "de" es una:',
            options: ['Preposición', 'Conjunción', 'Artículo', 'Adjetivo'],
            correctAnswer: 'Preposición',
            explanation: 'Las preposiciones (a, ante, bajo, con, contra, de, desde...) sirven para relacionar elementos.'
          },
          {
            id: 'q4-1-9',
            type: QuestionType.Written,
            questionText: 'Identifica el verbo en la oración "El viejo árbol tenía muchas ramas".',
            correctAnswer: 'tenía',
            explanation: 'El verbo es la palabra que expresa la acción o el estado, en este caso "tenía" del verbo tener.'
          },
          {
            id: 'q4-1-10',
            type: QuestionType.MultipleChoice,
            questionText: 'En "Unos niños juegan", la palabra "Unos" es un:',
            options: ['Adjetivo', 'Pronombre', 'Sustantivo', 'Artículo'],
            correctAnswer: 'Artículo',
            explanation: 'Es un artículo indeterminado que precede al sustantivo "niños".'
          }
        ]
      }
    ]
  },
  {
    id: 'm6',
    title: 'Comprensión lectora',
    description: 'Desarrolla habilidades para interpretar, analizar y evaluar textos de manera efectiva.',
    color: 'bg-purple-500',
    lessons: [
      {
        id: 'l6-1',
        title: 'Idea principal e ideas secundarias',
        content: [
          { type: 'paragraph', text: 'Todo texto se organiza en torno a una idea principal, que es el mensaje central que el autor quiere transmitir. Las ideas secundarias la apoyan, explican o ejemplifican.' },
          { type: 'subtitle', text: 'Cómo encontrarlas:' },
          { type: 'list', text: [
              'Idea Principal: Pregúntate: ¿De qué trata principalmente este párrafo o texto? Suele ser la afirmación más general.',
              'Ideas Secundarias: Son las oraciones que ofrecen detalles, ejemplos, datos o explicaciones sobre la idea principal.'
            ]
          },
          { type: 'subtitle', text: 'Ejemplo:' },
          { type: 'paragraph', text: 'Texto: "Los bosques son vitales para el planeta. Producen el oxígeno que respiramos, regulan el clima absorbiendo dióxido de carbono y son el hogar de millones de especies de plantas y animales."'},
          { type: 'list', text: [
              'Idea Principal: "Los bosques son vitales para el planeta."',
              'Ideas Secundarias: "Producen oxígeno", "regulan el clima", "son el hogar de millones de especies".'
            ]
          }
        ]
      },
      {
        id: 'l6-2',
        title: 'Inferencias y conclusiones',
        content: [
          { type: 'paragraph', text: 'No todo lo que un texto comunica está escrito explícitamente. A menudo, debemos leer "entre líneas" para captar el mensaje completo.' },
          { type: 'subtitle', text: 'Conceptos:' },
          { type: 'list', text: [
              'Inferir: Es deducir información que no está dicha directamente, basándote en las pistas que da el texto y tu propio conocimiento.',
              'Concluir: Es llegar a un juicio o una idea general después de analizar toda la información presentada en el texto.'
            ]
          },
          { type: 'subtitle', text: 'Ejemplo de inferencia:' },
          { type: 'paragraph', text: 'Si lees: "Cuando Marco entró a la casa, se quitó el paraguas mojado y las botas llenas de barro.", puedes inferir que afuera está lloviendo, aunque el texto no lo diga.'}
        ]
      }
    ],
    quizzes: [
      {
        id: 'q6-1',
        title: 'Quiz de comprensión lectora',
        questions: [
          {
            id: 'q6-1-0', // Not a real question, just holds the text for the quiz
            type: QuestionType.Written,
            questionText: 'Lee el siguiente texto y responde las preguntas a continuación:\n\nEl chocolate, un alimento derivado de la semilla del cacao, ha sido valorado durante siglos no solo por su delicioso sabor, sino también por sus beneficios para la salud. Los estudios modernos sugieren que el chocolate negro, rico en cacao, contiene antioxidantes que pueden mejorar la salud del corazón y la función cerebral. Sin embargo, no todo el chocolate es igual. El chocolate con leche y el blanco contienen altas cantidades de azúcar y grasa, y sus beneficios son mínimos en comparación. Por ello, los expertos recomiendan un consumo moderado de chocolate con un alto porcentaje de cacao (superior al 70%) para aprovechar sus propiedades sin excederse en calorías.',
            correctAnswer: '',
            explanation: ''
          },
          {
            id: 'q6-1-1',
            type: QuestionType.MultipleChoice,
            questionText: '¿Cuál es la idea principal del texto?',
            options: [
              'El chocolate es un alimento delicioso.', 
              'Todos los tipos de chocolate son malos para la salud.', 
              'El chocolate negro, consumido con moderación, puede ser beneficioso para la salud.', 
              'El chocolate blanco es el más saludable.'
            ],
            correctAnswer: 'El chocolate negro, consumido con moderación, puede ser beneficioso para la salud.',
            explanation: 'El texto se centra en destacar los beneficios del chocolate negro, diferenciándolo de otros tipos y recomendando su consumo moderado.'
          },
          {
            id: 'q6-1-2',
            type: QuestionType.MultipleChoice,
            questionText: 'Según el texto, ¿qué componente del chocolate negro es beneficioso?',
            options: ['El azúcar', 'La grasa', 'Los antioxidantes', 'La leche'],
            correctAnswer: 'Los antioxidantes',
            explanation: 'El texto menciona explícitamente que "el chocolate negro... contiene antioxidantes que pueden mejorar la salud".'
          },
          {
            id: 'q6-1-3',
            type: QuestionType.Written,
            questionText: '¿Qué tipo de chocolate se recomienda consumir?',
            correctAnswer: 'Chocolate negro con más del 70% de cacao',
            explanation: 'El texto aconseja "un consumo moderado de chocolate con un alto porcentaje de cacao (superior al 70%)".'
          },
          {
            id: 'q6-1-4',
            type: QuestionType.MultipleChoice,
            questionText: '¿Qué se puede inferir sobre el chocolate con leche?',
            options: [
              'Es más saludable que el chocolate negro.', 
              'No contiene cacao.', 
              'Su consumo debe ser más limitado que el del chocolate negro si se buscan beneficios para la salud.', 
              'Es ideal para la función cerebral.'
            ],
            correctAnswer: 'Su consumo debe ser más limitado que el del chocolate negro si se buscan beneficios para la salud.',
            explanation: 'El texto afirma que los beneficios del chocolate con leche son "mínimos" y que contiene "altas cantidades de azúcar y grasa", lo que permite inferir que su consumo debe ser más restringido.'
          },
          {
            id: 'q6-1-5',
            type: QuestionType.MultipleChoice,
            questionText: 'El propósito principal del autor es:',
            options: ['Entretener con la historia del chocolate.', 'Persuadir para que la gente no coma chocolate.', 'Informar sobre los diferentes tipos de chocolate y sus efectos en la salud.', 'Vender chocolate negro.'],
            correctAnswer: 'Informar sobre los diferentes tipos de chocolate y sus efectos en la salud.',
            explanation: 'El texto presenta datos y recomendaciones de manera objetiva para educar al lector sobre el tema.'
          },
          {
            id: 'q6-1-6',
            type: QuestionType.Written,
            questionText: '¿De dónde se deriva el chocolate?',
            correctAnswer: 'De la semilla del cacao',
            explanation: 'La primera oración del texto indica que el chocolate es "un alimento derivado de la semilla del cacao".'
          },
          {
            id: 'q6-1-7',
            type: QuestionType.MultipleChoice,
            questionText: 'La palabra "moderado" en el texto significa:',
            options: ['Abundante', 'Sin límites', 'En gran cantidad', 'Con medida y sin exceso'],
            correctAnswer: 'Con medida y sin exceso',
            explanation: 'El contexto de "aprovechar sus propiedades sin excederse en calorías" indica que "moderado" se refiere a un consumo controlado.'
          },
          {
            id: 'q6-1-8',
            type: QuestionType.MultipleChoice,
            questionText: '¿Cuál es una idea secundaria del texto?',
            options: ['El chocolate es valorado desde hace siglos.', 'El chocolate con leche contiene azúcar y grasa.', 'Se debe comer chocolate todos los días.', 'El chocolate negro es el único que existe.'],
            correctAnswer: 'El chocolate con leche contiene azúcar y grasa.',
            explanation: 'Esta es una idea que apoya y desarrolla la idea principal al contrastar los tipos de chocolate.'
          },
          {
            id: 'q6-1-9',
            type: QuestionType.MultipleChoice,
            questionText: '¿Qué conclusión se puede sacar del texto?',
            options: ['Cualquier chocolate es una opción saludable.', 'Es importante leer las etiquetas y elegir chocolates con alto contenido de cacao.', 'El sabor es el único factor importante al elegir un chocolate.', 'Comer mucho chocolate mejora la función cerebral.'],
            correctAnswer: 'Es importante leer las etiquetas y elegir chocolates con alto contenido de cacao.',
            explanation: 'La conclusión general es que la calidad del chocolate (su porcentaje de cacao) es clave para obtener beneficios, lo que implica una elección informada por parte del consumidor.'
          },
          {
            id: 'q6-1-10',
            type: QuestionType.Written,
            questionText: 'Nombra dos beneficios del chocolate negro mencionados en el texto.',
            correctAnswer: 'Mejorar la salud del corazón y la función cerebral.',
            explanation: 'El texto menciona que los antioxidantes pueden "mejorar la salud del corazón y la función cerebral".'
          }
        ]
      }
    ]
  }
];
