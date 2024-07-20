import { toKana } from './toKana';
import { toRomans } from './toRomans';

describe('ローマ字変換', () => {
  test.each<[string, ReadonlyArray<string>]>([
    ['', ['']],

    ['あ', ['a']],
    ['い', ['i']],
    ['う', ['u']],
    ['え', ['e']],
    ['お', ['o']],
    ['か', ['ka']],
    ['き', ['ki']],
    ['く', ['ku']],
    ['け', ['ke']],
    ['こ', ['ko']],
    ['さ', ['sa']],
    ['し', ['si']],
    ['す', ['su']],
    ['せ', ['se']],
    ['そ', ['so']],
    ['た', ['ta']],
    ['ち', ['ti']],
    ['つ', ['tu']],
    ['て', ['te']],
    ['と', ['to']],
    ['な', ['na']],
    ['に', ['ni']],
    ['ぬ', ['nu']],
    ['ね', ['ne']],
    ['の', ['no']],
    ['は', ['ha']],
    ['ひ', ['hi']],
    ['ふ', ['hu']],
    ['へ', ['he']],
    ['ほ', ['ho']],
    ['ま', ['ma']],
    ['み', ['mi']],
    ['む', ['mu']],
    ['め', ['me']],
    ['も', ['mo']],
    ['や', ['ya']],
    ['ゆ', ['yu']],
    ['よ', ['yo']],
    ['ら', ['ra']],
    ['り', ['ri']],
    ['る', ['ru']],
    ['れ', ['re']],
    ['ろ', ['ro']],
    ['わ', ['wa']],
    ['を', ['wo']],

    ['が', ['ga']],
    ['ぎ', ['gi']],
    ['ぐ', ['gu']],
    ['げ', ['ge']],
    ['ご', ['go']],
    ['ざ', ['za']],
    ['じ', ['zi']],
    ['ず', ['zu']],
    ['ぜ', ['ze']],
    ['ぞ', ['zo']],
    ['だ', ['da']],
    ['ぢ', ['di']],
    ['づ', ['du']],
    ['で', ['de']],
    ['ど', ['do']],
    ['ば', ['ba']],
    ['び', ['bi']],
    ['ぶ', ['bu']],
    ['べ', ['be']],
    ['ぼ', ['bo']],
    ['ぱ', ['pa']],
    ['ぴ', ['pi']],
    ['ぷ', ['pu']],
    ['ぺ', ['pe']],
    ['ぽ', ['po']],

    ['きゃ', ['kya']],
    ['きゅ', ['kyu']],
    ['きょ', ['kyo']],
    ['しゃ', ['sya']],
    ['しゅ', ['syu']],
    ['しょ', ['syo']],
    ['ちゃ', ['tya']],
    ['ちゅ', ['tyu']],
    ['ちょ', ['tyo']],
    ['にゃ', ['nya']],
    ['にゅ', ['nyu']],
    ['にょ', ['nyo']],
    ['ひゃ', ['hya']],
    ['ひゅ', ['hyu']],
    ['ひょ', ['hyo']],
    ['みゃ', ['mya']],
    ['みゅ', ['myu']],
    ['みょ', ['myo']],
    ['りゃ', ['rya']],
    ['りゅ', ['ryu']],
    ['りょ', ['ryo']],
    ['ぎゃ', ['gya']],
    ['ぎゅ', ['gyu']],
    ['ぎょ', ['gyo']],
    ['じゃ', ['zya']],
    ['じゅ', ['zyu']],
    ['じょ', ['zyo']],
    ['びゃ', ['bya']],
    ['びゅ', ['byu']],
    ['びょ', ['byo']],
    ['ぴゃ', ['pya']],
    ['ぴゅ', ['pyu']],
    ['ぴょ', ['pyo']],

    ['っか', ['kka']],

    ['ぁ', ['la']],
    ['ぃ', ['li']],
    ['ぅ', ['lu']],
    ['ぇ', ['le']],
    ['ぉ', ['lo']],

    ['ヵ', ['lka']],

    ['あいうえお', ['aiueo']],
    ['かきくけこ', ['kakikukeko']],
    ['さしすせそ', ['sasisuseso']],
    ['たちつてと', ['tatituteto']],
    ['なにぬねの', ['naninuneno']],
    ['はひふへほ', ['hahihuheho', 'hahifuheho']],
    ['まみむめも', ['mamimumemo']],
    ['やゆよ', ['yayuyo']],
    ['らりるれろ', ['rarirurero']],
    ['わをん', ['wawonn']],

    ['がぎぐげご', ['gagigugego']],
    ['ざじずぜぞ', ['zazizuzezo']],
    ['だぢづでど', ['dadidudedo']],
    ['ばびぶべぼ', ['babibubebo']],
    ['ぱぴぷぺぽ', ['papipupepo']],

    ['あいうえおかきくけこ', ['aiueokakikukeko']],
    ['きょうとふ', ['kyoutohu']],
    ['こっかいぎじどう', ['kokkaigizidou']],
    ['なんばんとらい', ['nanbantorai']],

    ['これはぺんです', ['korehapendesu']],
    ['これはぺんです', ['korehapenndesu']],

    ['ろーま', ['ro-ma']],

    ['kた', ['kta']],
    ['ktーkt', ['kt-kt']],

    ['きょうと', ['kyouto']],
  ])('かな <==> ローマ字 : %s <==> %j', (kana, romans) => {
    for (const roman of romans) {
      expect(toKana(roman)).toBe(kana);
    }

    const actual = toRomans(kana);
    for (const a of actual) {
      expect(actual.filter((ac) => ac === a).length).toBe(1);
    }

    for (const roman of romans) {
      expect(actual).toContain(roman);
    }
  });
});
