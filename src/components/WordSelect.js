// rafce

const WordSelect = () => {
  return (
    <div>
      <span>Выберите слово: </span>
      <select>
        <option selected>play</option>
        <option>sleep</option>
        <option>love</option>
        <option>live</option>
      </select>
    </div>
  );
};

export default WordSelect;

const vocabulary = [
  {
    id: 1,
    wEn: 'play',
    wEnNowHeShe: 'plays',
    wEnPast: 'played',
    wRuFuture: 'играть',
    wRuNowI: 'играю',
    wRuNowYou: 'играешь',
    wRuNowWe: 'играем',
    wRuNowThey: 'играют',
    wRuNowHeShe: 'играет',
    wRuPastIYou: 'поиграл(а)',
    wRuPastWeThey: 'поиграли',
    wRuPastHe: 'поиграл',
    wRuPastShe: 'поиграла',
    wUaFuture: 'грати',
    wUaNowI: 'граю',
    wUaNowYou: 'граєш',
    wUaNowWe: 'граємо',
    wUaNowThey: 'грають',
    wUaNowHeShe: 'грає',
    wUaPastIYou: 'пограв(ла)',
    wUaPastWeThey: 'пограли',
    wUaPastHe: 'пограв',
    wUaPastShe: 'пограла',
  },
  {
    id: 2,
    wEn: 'love',
    wEnNowHeShe: 'loves',
    wEnPast: 'loved',
    wRuFuture: 'любить',
    wRuNowI: 'люблю',
    wRuNowYou: 'любишь',
    wRuNowWe: 'любим',
    wRuNowThey: 'любят',
    wRuNowHeShe: 'любит',
    wRuPastIYou: 'любил(а)',
    wRuPastWeThey: 'любили',
    wRuPastHe: 'любил',
    wRuPastShe: 'любила',
    wUaFuture: 'любити',
    wUaNowI: 'люблю',
    wUaNowYou: 'любить',
    wUaNowWe: 'любимо',
    wUaNowThey: 'люблять',
    wUaNowHeShe: 'любить',
    wUaPastIYou: 'любив(а)',
    wUaPastWeThey: 'любили',
    wUaPastHe: 'любив',
    wUaPastShe: 'любила',
  },
  {
    id: 3,
    wEn: 'live',
    wEnNowHeShe: 'lives',
    wEnPast: 'lived',
    wRuFuture: 'жить',
    wRuNowI: 'живу',
    wRuNowYou: 'живешь',
    wRuNowWe: 'живём',
    wRuNowThey: 'живут',
    wRuNowHeShe: 'живёт',
    wRuPastIYou: 'жил(а)',
    wRuPastWeThey: 'жили',
    wRuPastHe: 'жил',
    wRuPastShe: 'жила',
    wUaFuture: 'жити',
    wUaNowI: 'живу',
    wUaNowYou: 'живеш',
    wUaNowWe: 'живемо',
    wUaNowThey: 'живуть',
    wUaNowHeShe: 'живе',
    wUaPastIYou: 'жив(ла)',
    wUaPastWeThey: 'жили',
    wUaPastHe: 'жив',
    wUaPastShe: 'жила',
  },
];
