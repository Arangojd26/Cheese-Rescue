import vidCorreco1 from '../../assets/vid/pregunta2_1.mp4';
import vidIncorreco1 from '../../assets/vid/pregunta1_1Again.mp4';
import vidCorrecto2 from '../../assets/vid/pregunta3_3.mp4';
import vidIncorrecto2 from '../../assets/vid/pregunta2_2Again.mp4';
import vidCorrecto3 from '../../assets/vid/CorrectaFinal_1.mp4';
import vidIncorrecto3 from '../../assets/vid/incorrectoFinal_1.mp4';

export const validation = {
    question1: {
        idIncorrecta: 'pregunta 1 - v1 - incorrecto',
        idNext: 'pregunta 1 - v2',
        values: [16, 32, 24],
        correct: 32
    },
    question2: {
        idIncorrecta: 'pregunta 1 - v2 - incorrecto',
        idNext: 'pregunta 1 - v3',
        values: [8, 14, 12],
        correct: 12
    },
    question3: {
        idIncorrecta: 'pregunta 1 - v3 - incorrecto',
        idNext: 'correcta final',
        values: [26, 22, 28],
        correct: 26
    }
}
export const videos = {
    videoInicio: "inicio.mp4",
    videoCorrecto1: vidCorreco1,
    videoIncorrecto1: vidIncorreco1,
    videoCorrecto2: vidCorrecto2,
    videoIncorrecto2: vidIncorrecto2,
    videoCorrecto3: vidCorrecto3,
    videoIncorrecto3: vidIncorrecto3
}