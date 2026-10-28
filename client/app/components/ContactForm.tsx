"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdFace } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const form = useRef<any>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      let response = await emailjs.sendForm(
        "service_wj9bjqy",
        "template_ul39x3q",
        form.current ?? "",
        "YfVmgNXWC9f2RjdN3"
      );

      if (response.status === 200) {
        reset();
        if (form.current) {
          form.current.reset();
        }
        toast.success("Thanks for reaching out! I'll get back to you soon.", {
          icon: "📧",
        });
      } else {
        toast.error("Oops, your message didn't go through. Please try again.", {
          icon: "❌",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Oops, your message didn't go through. Please try again.");
    }
  };

  return (
    <>
      <form
        ref={form}
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="input input-bordered flex items-center gap-2 bg-slate-700 ">
          <input
            type="text"
            className="grow input-primary"
            placeholder="Full Name"
            id="name"
            {...register("name", { required: "Please tell me your name" })}
          />
          <MdFace />
        </label>
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}

        <label className="input input-bordered flex items-center gap-2 bg-slate-700 ">
          <input
            type="email"
            className="grow input-primary"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: "I'll need your email to reply",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "That email doesn't look quite right",
              },
            })}
          />
          <MdEmail />
        </label>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <textarea
          className="textarea bg-slate-700 inpur"
          placeholder="Message"
          id="message"
          {...register("message", { required: "Don't forget your message" })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}

        <button
          className="btn bg-blue-400 border-blue-500 text-primary-content font-normal hover:bg-blue-400 hover:scale-100 disabled:bg-slate-400"
          type="submit"
          disabled={Object.keys(errors).length > 0}
        >
          Send
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
