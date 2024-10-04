import { Meta, StoryObj } from "@storybook/react/*";
import { File } from "../components/ui/common/File";

const meta: Meta<typeof File> = {
  title: "Display file",
  component: File,
};

export default meta;

type Story = StoryObj<typeof File>;

export const FileObject: Story = {
  args: {
    name: "FileTest",
    type: "file",
  },
};

export const FolderObject: Story = {
  args: {
    name: "FileTest",
    type: "folder",
  },
};
