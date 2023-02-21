const wordPlay = [
  { id: 1, tUA: 'Я буду гратися', tRU: 'Я буду играть', tEN: 'I will play' },
  { id: 2, tUA: 'Я граюся', tRU: 'Я играю', tEN: 'I play' },
  { id: 3, tUA: 'Я пограв', tRU: 'Я поиграл', tEN: 'I played' },

  {
    id: 4,
    tUA: 'Ти будеш грати',
    tRU: 'Ты будешь играть',
    tEN: 'You will play',
  },
  { id: 5, tUA: 'Ти граєш', tRU: 'Ты играешь', tEN: 'You play' },
  { id: 6, tUA: 'Ти погрався', tRU: 'Ты поиграл', tEN: 'You played' },

  {
    id: 7,
    tUA: 'Ми будемо гратися',
    tRU: 'Мы будем играть',
    tEN: 'We will play',
  },
  { id: 8, tUA: 'Ми граємося', tRU: 'Мы играем', tEN: 'We play' },
  { id: 9, tUA: 'Ми погралися', tRU: 'Мы поиграли', tEN: 'We played' },

  {
    id: 10,
    tUA: 'Вони будуть гратися',
    tRU: 'Они будут играть',
    tEN: 'They will play',
  },
  { id: 11, tUA: 'Вони граються', tRU: 'Они играют', tEN: 'They play' },
  { id: 12, tUA: 'Вони погралися', tRU: 'Они поиграли', tEN: 'They played' },

  {
    id: 13,
    tUA: 'Він буде гратися',
    tRU: 'Он будет играть',
    tEN: 'He will play',
  },
  { id: 14, tUA: 'Він грається', tRU: 'Он играет', tEN: 'He plays' },
  { id: 15, tUA: 'Він погрався', tRU: 'Он поиграл', tEN: 'He played' },

  {
    id: 16,
    tUA: 'Вона буде гратися',
    tRU: 'Она будет играть',
    tEN: 'She will play',
  },
  { id: 17, tUA: 'Вона грається', tRU: 'Она играет', tEN: 'She plays' },
  { id: 18, tUA: 'Вона погралася', tRU: 'Она поиграла', tEN: 'She played' },

  {
    id: 19,
    tUA: 'Я не буду гратися',
    tRU: 'Я не буду играть',
    tEN: 'I will not play',
  },
  { id: 20, tUA: 'Я не граюся', tRU: 'Я не играю', tEN: "I don't play" },
  { id: 21, tUA: 'Я не пограв', tRU: 'Я не поиграл', tEN: 'I did not play' },

  {
    id: 22,
    tUA: 'Ти не будеш грати',
    tRU: 'Ты не будешь играть',
    tEN: 'You will not play',
  },
  { id: 23, tUA: 'Ти не граєш', tRU: 'Ты не играешь', tEN: "You don't play" },
  {
    id: 24,
    tUA: 'Ти не погрався',
    tRU: 'Ты не поиграл',
    tEN: 'You did not play',
  },

  {
    id: 25,
    tUA: 'Ми не будемо гратися',
    tRU: 'Мы не будем играть',
    tEN: 'We will not play',
  },
  { id: 26, tUA: 'Ми не граємося', tRU: 'Мы не играем', tEN: "We don't play" },
  {
    id: 27,
    tUA: 'Ми не погралися',
    tRU: 'Мы не поиграли',
    tEN: 'We did not play',
  },

  {
    id: 28,
    tUA: 'Вони не будуть гратися',
    tRU: 'Они не будут играть',
    tEN: 'They will not play',
  },
  {
    id: 29,
    tUA: 'Вони не граються',
    tRU: 'Они не играют',
    tEN: "They don't play",
  },
  {
    id: 30,
    tUA: 'Вони не погралися',
    tRU: 'Они не поиграли',
    tEN: 'They did not play',
  },

  {
    id: 31,
    tUA: 'Він не буде гратися',
    tRU: 'Он не будет играть',
    tEN: 'He will not play',
  },
  {
    id: 32,
    tUA: 'Він не грається',
    tRU: 'Он не играет',
    tEN: "He doesn't play",
  },
  {
    id: 33,
    tUA: 'Він не погрався',
    tRU: 'Он не поиграл',
    tEN: 'He did not play',
  },

  {
    id: 34,
    tUA: 'Вона не буде гратися',
    tRU: 'Она не будет играть',
    tEN: 'She will not play',
  },
  {
    id: 35,
    tUA: 'Вона не грається',
    tRU: 'Она не играет',
    tEN: "She doesn't play",
  },
  {
    id: 36,
    tUA: 'Вона не погралася',
    tRU: 'Она не поиграла',
    tEN: 'She did not play',
  },

  {
    id: 37,
    tUA: 'Я буду гратися ?',
    tRU: 'Я буду играть ?',
    tEN: 'Will I play ?',
  },
  { id: 38, tUA: 'Я граюся ?', tRU: 'Я играю ?', tEN: 'Do I play ?' },
  { id: 39, tUA: 'Я пограв ?', tRU: 'Я поиграл ?', tEN: 'Did I play ?' },

  {
    id: 40,
    tUA: 'Ти будеш грати ?',
    tRU: 'Ты будешь играть ?',
    tEN: 'Will you play ?',
  },
  { id: 41, tUA: 'Ти граєш ?', tRU: 'Ты играешь ?', tEN: 'Do you play ?' },
  { id: 42, tUA: 'Ти погрався ?', tRU: 'Ты поиграл ?', tEN: 'Did you play ?' },

  {
    id: 43,
    tUA: 'Ми будемо гратися ?',
    tRU: 'Мы будем играть ?',
    tEN: 'Will we play ?',
  },
  { id: 44, tUA: 'Ми граємося ?', tRU: 'Мы играем ?', tEN: 'Do we play ?' },
  { id: 45, tUA: 'Ми погралися ?', tRU: 'Мы поиграли ?', tEN: 'Did we play ?' },

  {
    id: 46,
    tUA: 'Вони будуть гратися ?',
    tRU: 'Они будут играть ?',
    tEN: 'Will they play ?',
  },
  {
    id: 47,
    tUA: 'Вони граються ?',
    tRU: 'Они играют ?',
    tEN: 'Do they play ?',
  },
  {
    id: 48,
    tUA: 'Вони погралися ?',
    tRU: 'Они поиграли ?',
    tEN: 'Did they play ?',
  },

  {
    id: 49,
    tUA: 'Він буде гратися ?',
    tRU: 'Он будет играть ?',
    tEN: 'Will he play ?',
  },
  { id: 50, tUA: 'Він грається ?', tRU: 'Он играет ?', tEN: 'Does he play ?' },
  { id: 51, tUA: 'Він погрався ?', tRU: 'Он поиграл ?', tEN: 'Did he play ?' },

  {
    id: 52,
    tUA: 'Вона буде гратися ?',
    tRU: 'Она будет играть ?',
    tEN: 'Will she play ?',
  },
  {
    id: 53,
    tUA: 'Вона грається ?',
    tRU: 'Она играет ?',
    tEN: 'Does she play ?',
  },
  {
    id: 54,
    tUA: 'Вона погралася ?',
    tRU: 'Она поиграла ?',
    tEN: 'Did she play ?',
  },
];

export default wordPlay;
