(ns tabber.chords)

(def chordList [["A" "M" "xx" 00 21 22 23 00]
                ["A" "m" "xx" 00 22 23 11 00]
                ["A" "6" "xx" 00 21 21 21 21]
                ["A" "7" "xx" 00 21 00 22 00]
                ["A" "M7" "xx" 00 22 11 23 00]
                ["A" "m7" "xx" 00 22 00 11 00]
                ["A" 7 "xx" "xx" "02" "02" "02" "o2" 8] ; This chord is wrong. Spec test

                ["Ab" "M" 21 43 44 32 21 21 4]
                ["Ab" "m" 21 43 44 21 21 21 4]
                ["Ab" "6" "xx" "xx" 11 11 11 11]
                ["Ab" "7" 21 43 21 32 21 21 4]
                ["Ab" "M7" 21 44 32 33 21 21 4]
                ["Ab" "m7" 21 43 21 21 21 21 4]

                ["B" "M" "xx" 21 42 43 44 21 2]
                ["B" "m" "xx" 21 43 44 32 21 2]
                ["B" "6" "xx" 21 43 43 43 43 2]
                ["B" "7" "xx" 22 11 23 00 24]
                ["B" "M7" "xx" 21 43 32 44 21 2]
                ["B" "m7" "xx" 21 43 21 32 21 2]

                ["Bb" "M" "xx" 11 32 33 34 11 1]
                ["Bb" "m" "xx" 11 33 34 22 11 1]
                ["Bb" "6" "xx" 11 33 33 33 33 1]
                ["Bb" "7" "xx" 11 33 11 34 11 1]
                ["Bb" "M7" "xx" 11 33 22 34 11 1]
                ["Bb" "m7" "xx" 11 33 11 22 11 1]

                ["C" "M" "xx" 33 22 00 11 00]
                ["C" "m" "xx" 21 43 44 32 21 3]
                ["C" "6" "xx" 34 22 23 11 00]
                ["C" "7" "xx" 33 22 34 11 00]
                ["C" "M7" "xx" 33 22 00 00 00]
                ["C" "m7" "xx" 21 43 21 32 21  3]

                ["C#" "M" "xx" 21 42 43 44 21 4]
                ["C#" "m" "xx" 21 43 44 32 21 4]
                ["C#" "6" "xx" 21 43 43 43 43 4]
                ["C#" "7" "xx" 21 43 21 44 21 4]
                ["C#" "M7" "xx" 21 43 32 44 21 4]
                ["C#" "m7" "xx" 21 43 21 32 21 4]

                ["D" "M" "xx" "xx" 00 21 33 22]
                ["D" "m" "xx" "xx" 00 22 33 11]
                ["D" "6" "xx" "xx" 00 21 00 22]
                ["D" "7" "xx" "xx" 00 22 11 23]
                ["D" "M7" "xx" "xx" 00 21 21 21]
                ["D" "m7" "xx" "xx" 00 23 11 12]

                ["Db" "M" "xx" 21 42 43 44 21 4]
                ["Db" "m" "xx" 21 43 44 32 21 4]
                ["Db" "6" "xx" 21 43 43 43 43 4]
                ["Db" "7" "xx" 21 43 21 44 21 4]
                ["Db" "M7" "xx" 21 43 32 44 21 4]
                ["Db" "m7" "xx" 21 43 21 32 21 4]

                ["E" "M" 00 22 23 11 00 00]
                ["E" "m" 00 21 22 00 00 00]
                ["E" "6" 00 22 23 11 24 00]
                ["E" "7" 00 22 00 11 00 00]
                ["E" "M7" 00 23 11 12 00 00]
                ["E" "m7" 00 21 00 00 34 00]

                ["Eb" "M" "xx" 21 42 43 44 21 6]
                ["Eb" "m" "xx" 21 43 44 32 21 6]
                ["Eb" "6" "xx" 21 43 43 43 43 6]
                ["Eb" "7" "xx" 21 43 21 44 21 6]
                ["Eb" "M7" "xx" 21 43 32 44 21 6]
                ["Eb" "m7" "xx" 21 43 21 32 21 6]

                ["F" "M" 11 33 34 22 11 11 1]
                ["F" "m" 11 33 34 11 11 11 1]
                ["F" "6" "xx" "xx" 00 22 11 11]
                ["F" "7" 11 33 11 22 11 11 1]
                ["F" "M7" "xx" "xx" 33 22 11 00]
                ["F" "m7" 11 33 11 11 11 11 1]

                ["F#" "M" 21 43 44 32 21 21 4]
                ["F#" "m" 21 43 44 21 21 21 4]
                ["F#" "6" 22 "xx" 11 23 24 "xx"]
                ["F#" "7" 21 43 21 32 21 21 4]
                ["F#" "M7" 21 44 32 33 21 21 4]
                ["F#" "m7" 21 43 21 21 21 21 4]

                ["G" "M" 32 21 00 00 33 34]
                ["G" "m" 21 43 44 21 21 21 3]
                ["G" "6" 32 21 00 00 33 00]
                ["G" "7" 33 22 00 00 00 11]
                ["G" "M7" 33 21 00 00 00 22]
                ["G" "m7" 21 43 21 21 21 21 3]

                ["G#" "M" 21 43 44 32 21 21 4]
                ["G#" "m" 21 43 44 21 21 21 4]
                ["G#" "6" "xx" "xx" 11 11 11 11]
                ["G#" "7" 21 43 21 32 21 21 4]
                ["G#" "M7" 21 44 32 33 21 21 4]
                ["G#" "m7" 21 43 21 21 21 21 4]])
