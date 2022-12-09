const input = `jghhttcmttdwwfjjjpqjqllwvwffswwqmwmddvndvdrrcwrccfncfcgcjjpjrjzjggczgglhllbzlztlzzswwbqqrvrvqrqcrclrccrbrpbbzhbbzvbbwrwswqwqqgmmgqmqmdqdhdmmfnndpdvvdvdbbmgmqgqgqmqrrsbsrrzcrzrcrvrddpqdpdwwsvshvshvshszhshddjllbjljjwhjwhwppbssdccvzzmvvwrrrhmmbdbggqhgqglglgrrdbdjddjvddzpznzmnnpgnppnznzvzbzvvdtdwdttnzzdpzzqjzjzllhglghgttcbtcbtbjbssqcqtcqtqvttvpvqvggbsszjsjqjllfgfqqhllvsvmmjhhbdbzzrwzzggdfgdgcddgmmjnjhhhgvgwghgfffclffdmmmlclzclzzqgqjqzqwzqzbbbljlplnlrlqlqlhlvlmvvlwltwtqwwznndpdttjjrllpptnngjnnzppjhpjhpjpjmjpmjpptzppjpsprpbpmmshmsmqqnhnjhnjnccdnnqhhgfgmgnmnvvtwvttcbtbnbcnnhjjnpphjpjppshsppmrmrbrlrzlzjlzzvssvfffsjfsjshshppchppprpcclhlmmgwwsddgbdggcqqhsqqbdbzzdffmpmvmpptppjrprrgvvgrrztrtllnblbffpgprpqqwcwjwcjcbbjgbbsgsbgbgwbwrrbcrcjcnnvlnlmnnwcncbcrrgcrggtqqgbbqsqhsqslswsdswscwssbqbppczzpmmnjnfjfpjpqpddpbbgrrnqrnqqnwqnntsnsdnddvhhgrgmmgzmgmwgmwwmfwwnqnjjgqghqhhpzpmpbmpbbqvvjjlvvddcnnglnnhpnhhjghgrgjrjqqgtqggmzzbdbssbpssrjsrsbbpzzsgzzpcpwwfgwfgfccslsmlltlnttpvvcbvbqqqqvlvplvvmnntstffvhvvwfftltjjtftbftfqqnbbmnmqqwbbldbldbddtldtldldbllsggdqgdgfgtggglmmgfgcfgccgttgdgdvgglhhvbbnzbzvbzzvtvntvntvvwgvgcgrrmbmnmttzlzgllpmlpmmscsncnnnfrrvqvmvsvsrvvbvpbbvsvssdnnmvnnnggpmpbbqsqwssjwwtnwwhbwwmcwwjfwfhfvvsnsqqwmmrfmrmcrchhpqprpzpmpzzqqmqbqjjbffjnnhphdpdjjbcjcsjcjcdcrddscsgsqgsqggcscrssscvcncfccptcccjgjqqlppjbpjpgpzpgpqqzwqwcwnwccmnnnwrnrttjqtjtllbslsrlrggjrrjwrwmrrcbbnddzcdzcchqqrhhcrcrlrmrcchcpcmcrrlqltlhttdhhjrrzllwjjfvvzccmwwtlwwhpwwssfdsfdsfsddwbbfsfqfwqffhqfqvqwwhfhrrwhrwhrwrzrwrzwwbsblslzzrwzwdwnwznnbsnsbbgffjppvqppbmmdffgghrrchrhfhthqthqhvvrcvrrfvfbvffmmbjmjbbwhhvqvbvjjfzjzvvwnvncvvdssfffjfhjhbbdhdlllmrlmrllbtltbbhnnczzwjzwjwllvtvmvpvvmmfnmnwmwjwrrqtqlltwllwrllsvvdrvrnvrnnsjnjfnnmpnpgnglnggbnbmmcmddhrdrjdjtthssdbssjtjvttqwqppwbpblljnlnljlfjffvddtzzqfzqqjttqhhhvppghpghpghghjggsrrczzqvvbjbbbglldcdrdqdpqpwpffnjnhnthhtlhhrdrcrwrvrlvrlvrvprpccmffqzffdbdhhwjjgmgzzqhqnqsstltjjzszpsppdpnddrnrmrllhtwnlhgzgvsfjfmgfcnnzqhbfztnzhnctmjjhvzrhjcptzqqtstlmrgnbcpnctjgswhfcmtzgsndfzdlqsrlcjrssmjndgrzgvtgfjwtcqwnzmrgtgngcwcwzvttqcdwqspzldfmzgmfclwgqvvvqhhhswpdjlbpjpppdljbdjrbblbrtftdsmvmfpftdlvhdphzbcwwwjvmsjczbtblwbtszmbcmpbdqnwcgcltbdzbsvtjhlqgrsgqzztqrvmswtzgvsjslgvjcvhqftdcmwqwhgwrmrpfdqvfqhczlztrhjqlppchgspfjwzvfsncdhgnlnnshwsbvqmqwtldtmshhqpqbdzqlwfvvbbzwqvlvqdwcpbtrsrhmrjnzmqjttthhbbdjwtzhwjcvhzrtgfwltqhmzwtqbgjjpphlfwfhgctmwpqrmngfrfmbmcqpqcrsmzhjzdzbppbfwpgdtdjvjdvbwfcbddjpjbgtrjtddlpvnppcwhbbgpqgmcrwmfsvqspdvctvljbhcgnllzdpjmjdqwflrfqrsfqnhcsbtszjfmqvjwmcsghwcssbnzzpsggbmpdqrlctrcrmbzlnnqcfmrpfwsnjcggtqncwddsjjzwvlnfpwjlrgwrrvfhgtjwqlblnsnrddjqqtwtzrvfqfqcjhbwtlmfsfgpzgtdddtlvqlqgjwpprpzvdhvlfjbqqflbnvgsgblfpcqprlqrhrrddjjftbmfgghrrrhmttmnfzgmrzwcscnsmdnnddsbdjswhwmjfjnfvjbtcqjlflzjsqqhldcdsbjttmvmcdbwrfwdlllbbjhbmdhnfgwmmbpbsrmqptppqzwtncnwwsjjrchgpvdcsspfqpczmsqfrgvfgsnhfmplrnhzddlbvnthltpwbbzdwwnmhmllwfphhfpnghgdzlzgpbvsphbhvfmcvqpqvdsjjbnbsdvccbmgwdbgsnhpgfshzzznjdbngsrqpwhqjqdfsnmngzznwgvqrtjmzcmbbqjgjcdjdqbmdrgvqflsstqhgsgpfnmzvrdgztlzlhvdjdcslwbgldwjwftvczvtbpdtdqtqshqrbpvpgbfbtnnlmzrhdtsjdlllbtwqgcfphssqmszmbllnbpwvhfdllwtcbqccmbtscmsvppjjrcpswgtzgvhblvbmcddhhgqghbtwzffscsvzgwjdfldccbcfptpmmfbwqzlqhdrcdvhpnwvddqcrwwlmtgvrcvlbvtblhhmhdrvvnpmrdqsgjdrfprfcmtfsbrmsglfjcnjwvpjqlptrbmrqcrdfccmfvhqzrmwqbbmtmjrbnmvzdbwcfpwjzrjrhzrncpwptswhnrgsdpdfjqcjhnvvftgzdccpsgdqcqzfvbtftrzljqmjbgmmlrdlvpwqddmdhzsslzlnvfrblfzfpwtvhpwhmqmbzvchndbzfswtmvcprhlssmncfdqcpzjczptptgdzpjvrqtrlcgbhlqqwvnsrrvtllldbhztgnlmjbmqmgcpcbwtthnhwghnqgvqtnnltbzslmmbjbhqtrmqbgccphjsgwbtstvjnpjjqsdwdsgcrjgznntsgvlrgzmbnzdmbghrmtscppgmztfbsqczzvhsmjmmclhrcbgnvjbgffgbrhrdwccplpdfzcljgfntjlzmsqrwrmdqbclffbfpscddcfsbpsnnphjvjwsfvbprsgpcnbrblvvqfvngbhgmmglzzfmmpnnrphwrvqnmffwpsmmrlhmnsdvbdgjlrjmsdzjltgmjfplrrfmgbhzltzzfpwtqcqwbgsgwfbmntzsvtqqtnrhbtbnshfmwwzbvtsqmtsfssrcvgngvvhjlcnfsvltpsdjspgmmrqttcsltjzqglpspmgrnbrtnbtnjzprqmtfhgczjrlqdhsjqjbhpnwhrffmhvqfmlzcpfflptgqwthfzvspbjjdwmmbnttbztzpnjmlstgmgqbptdncqgbdbdnqwslwhfrdfvmbbqlzhdptpfrhnvcchpddngslzzrhsrwclpccbqhcscbzcpdtwmppvrpjnnjfgrswndtzprjnsvvdwwhhbcsglnwwptptdzgsmbwppdrhwpqhzlgfcsqtfzvqdvcsbtbqvtfvwlcdrwttgmwhbjlqphclqfzmlb`
    .split('');

let window = input.slice(0, 4);
for (let i = window.length; i < input.length; i++) {
    if ([...new Set(window)].length === window.length) console.log(i);
    window.shift();
    window.push(input[i]);
}