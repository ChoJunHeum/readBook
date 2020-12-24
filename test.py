import sys

# python3 synthesizer.py --load_path logs/pretrained_gpu --text "이거 실화냐?" --num_speakers=3 --speaker_id=0

load_path = sys.argv[1]
text = sys.argv[2]
num_speakers = sys.argv[3]
speaker_id = sys.argv[4]


print(f"RESULT: {text}")