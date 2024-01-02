import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useGetCareerBannersQuery } from "../../Redux/careerBanners/careerBannerApi";
import { useCreateCareerFormMutation } from "../../Redux/careerForms/careerFormApi";
import Spinner from "../../components/Spinner/Spinner";

export default function Career() {
  const [createCareerForm, { isLoading }] = useCreateCareerFormMutation();
  const { data, isLoading:getLoading } = useGetCareerBannersQuery();
  const careerBanners = data?.data[0];

  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    generateEquation();
  }, []);

  const generateEquation = () => {
    const operand1 = Math.floor(Math.random() * 10);
    const operand2 = Math.floor(Math.random() * 10);
    const operator = "+";

    setEquation(`${operand1} ${operator} ${operand2}`);
    setCorrectAnswer(operand1 + operand2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = parseInt(answer, 10) === correctAnswer;

    if (isValid) {
      const email = e.target.email.value;
      const name = e.target.name.value;
      const phone = e.target.phone.value;
      const subject = e.target.subject.value;
      const coverLetter = e.target.cover_letter.value;

      const data = {
        email,
        name,
        phone,
        subject,
        coverLetter,
      };

      const res = await createCareerForm(data).unwrap();
      if (res.success === true) {
        Swal.fire("", "Your message has been sent successfully", "success");
        e.target.reset();
        setAnswer("");
        setCorrectAnswer(null);
      } else {
        Swal.fire("", "Something went wrong", "error");
      }

      generateEquation();
    } else {
      setAnswer("");
      Swal.fire("", "Please solve the equation correctly", "error");
    }
  };

  if (getLoading) return <Spinner />;

  return (
    <section>
      <div>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/careerBanner/${
            careerBanners?.image
          }`}
          alt=""
          className="w-full md:h-80"
        />
      </div>

      <div className="container py-10">
        <div className="text-center">
          <h2 className="text-2xl text-neutral font-semibold">
            {careerBanners?.title}
          </h2>
          <p className="mt-2 text-neutral-content text-[15px] sm:w-2/3 mx-auto">
            {careerBanners?.description}
          </p>
        </div>

        <div className="mt-10 sm:w-2/3 mx-auto">
          <h2 className="text-xl text-neutral font-medium mb-4">
            Send us mail
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <p>
                Name <span className="text-secondary">*</span>
              </p>
              <input type="text" name="name" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p>
                  Email <span className="text-secondary">*</span>
                </p>
                <input type="email" name="email" required />
              </div>
              <div>
                <p>
                  Phone <span className="text-secondary">*</span>
                </p>
                <input type="text" name="phone" required />
              </div>
            </div>

            <div>
              <p>
                Subject <span className="text-secondary">*</span>
              </p>
              <input type="text" name="subject" required />
            </div>

            <div>
              <p>
                Cover Letter <span className="text-secondary">*</span>
              </p>
              <textarea name="cover_letter" rows="8" required></textarea>
            </div>

            <div>
              <p>
                Please prove that you are human by solving the equation
                <span className="text-secondary">*</span>
              </p>
              <div className="relative">
                <input
                  type="text"
                  name="answer"
                  className="pl-20"
                  required
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer}
                />
                <p className="absolute top-1.5 left-3 text-neutral-content">
                  {equation} = ?
                </p>
              </div>
            </div>

            <div>
              <button className="secondary_btn">
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
