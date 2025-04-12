import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import React, {useState} from "react";
import {createQuestion} from "../../redux/questionSlice";
import {Plus} from "lucide-react";
import {uploadImage} from "../../redux/uploadSlice";
import {Autocomplete, Chip, TextField} from "@mui/material";

export function PostQuestion() {

    const dispatch = useDispatch<AppDispatch>();
    const {loading} = useSelector((state: RootState) => state.question);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const {tags, fetching, error} = useSelector((state: RootState) => state.question);

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);

        // Generate preview URL
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim() || !selectedTags) return;

        const v: string = selectedFile ? await dispatch(uploadImage({image: selectedFile})).unwrap() : null;

        dispatch(createQuestion({
            question,
            description,
            tags: selectedTags,
            image: v,
        }));

        // Clear form after submission
        setQuestion("");
        setSelectedTags([]);
        setDescription("");
    };

    return (
        <>

            <div className="w-full flex-col flex gap-4 py-4">

                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* <h5 className="  "> Question</h5> */}
                        <div className="border-b w-full flex items-end ">
                            <input
                                type="text"
                                placeholder="Your question..."
                                value={question}
                                onChange={(e) => {
                                    setQuestion(e.target.value);
                                }}
                                className={`p-2 !border-b flex-1 font-bold placeholder:font-medium Focus:border-transparent w-full focus:outline-none border-gray-200 ${
                                    question.length > 60 ? "!text-red-400" : ""
                                }`}
                                required
                            />
                            <p className="text-right text-sm text-gray-500">
                                <div className="relative size-7">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="size-6">
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke={question.length > 60 ? "red" : "black"}
                                                strokeWidth="2"
                                                fill="none"
                                                strokeDasharray="62.8319" // Circumference of the circle (2 * π * r)
                                                strokeDashoffset={
                                                    question.length > 60
                                                        ? 0
                                                        : 62.8319 - (62.8319 * question.length) / 60
                                                }
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke={question.length > 60 ? "red" : "gray"}
                                                strokeWidth="2"
                                                fill="none"
                                                opacity={.3}
                                                strokeDasharray="62.8319" // Circumference of the circle (2 * π * r)

                                            />
                                            <text
                                                x="12"
                                                y="16"
                                                textAnchor="middle"
                                                fontSize="10"
                                                fill={question.length > 60 ? "red" : "gray"}
                                            >
                                                {60 - question.length}
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className={`w-full flex flex-row`}>

                        <textarea
                            placeholder="Enter your Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border-b flex-1  font-bold placeholder:font-medium focus:outline-none   "

                        />

                            <label
                                className="border-dashed size-[226px] rounded-[24px] border-[1.5px] border-[#48405c] flex items-center justify-center">
                                <div
                                    className="lg:w-[150px] lg:h-[55px] space-y-[14px] justify-items-center content-center">
                                    {preview ? (
                                        <img src={preview} alt="Preview"
                                             className="w-full h-full object-contain rounded-[24px]"/>
                                    ) : (
                                        <div
                                            className="lg:w-[150px] lg:h-[55px] space-y-[14px] justify-items-center content-center">
                                            <div
                                                className="size-[30px] bg-white rounded-full py-[9px] px-[11px] flex items-center justify-center">
                                                <Plus color="black" size={12}/>
                                            </div>
                                            <p className="uppercase text-[12px]">PNG, JPEG {"(600 X 256)"}</p>
                                        </div>
                                    )}
                                    <input type="file" accept="image/png, image/jpeg" className="hidden"
                                           onChange={handleFileChange}/>
                                </div>
                            </label>
                        </div>
                        <span className="flex gap-3 items-center border-b font-bold  ">
                            Tags:
                      </span>
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            value={selectedTags}
                            onChange={(e, newValue) => setSelectedTags(newValue)}
                            options={tags.map((option) => option)}
                            defaultValue={[tags[13]]}
                            freeSolo
                            renderValue={(value: readonly string[], getItemProps) =>
                                value.map((option: string, index: number) => {
                                    const {key, ...itemProps} = getItemProps({index});
                                    return (
                                        <Chip variant="outlined" label={option} key={key} {...itemProps} />
                                    );
                                })
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="filled"
                                    label="Tags"
                                    placeholder="tags"
                                />
                            )}
                        />
                        <span className="flex gap-3 items-center">

                            <button
                                type="submit"
                                className={`w-full rounded-full text-black p-2 ${
                                    question.trim() && selectedTags && question.length <= 60
                                        ? "bg-[#FFCD83] hover:bg-[#ffd493]"
                                        : "bg-gray-300 cursor-not-allowed"
                                }`}
                                disabled={!question.trim() || !selectedTags || loading || question.length > 60}
                                title={
                                    !question.trim() || !selectedTags || question.length > 60
                                        ? "Can't Post"
                                        : ""
                                }

                            >
                                {loading ? "Submitting..." : "Post"}
                            </button>
                            <span className="boxed bg-slate-100 !pl-3 !pr-4  rounded-md h-9 gap-2   ">
                                <img src="/spark.svg" alt="" className="size-4"/>
                                 3</span>
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
}
