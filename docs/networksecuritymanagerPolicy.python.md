# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-aws.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy aws_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_type: str,
  name: str,
  priority: typing.Union[int, float],
  configuration: IResolvable | typing.List[NetworksecuritymanagerPolicyConfiguration] = None,
  description: str = None,
  is_published: bool | IResolvable = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  template_or_rule: IResolvable | typing.List[NetworksecuritymanagerPolicyTemplateOrRule] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType">firewall_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.configuration">configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.isPublished">is_published</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.templateOrRule">template_or_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]</code> | template_or_rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.configuration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#configuration NetworksecuritymanagerPolicy#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}.

---

##### `is_published`<sup>Optional</sup> <a name="is_published" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.isPublished"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#region NetworksecuritymanagerPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}.

---

##### `template_or_rule`<sup>Optional</sup> <a name="template_or_rule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.templateOrRule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]

template_or_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_or_rule NetworksecuritymanagerPolicy#template_or_rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule">put_template_or_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetIsPublished">reset_is_published</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTemplateOrRule">reset_template_or_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration"></a>

```python
def put_configuration(
  value: IResolvable | typing.List[NetworksecuritymanagerPolicyConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]

---

##### `put_template_or_rule` <a name="put_template_or_rule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule"></a>

```python
def put_template_or_rule(
  value: IResolvable | typing.List[NetworksecuritymanagerPolicyTemplateOrRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_is_published` <a name="reset_is_published" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetIsPublished"></a>

```python
def reset_is_published() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_or_rule` <a name="reset_template_or_rule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTemplateOrRule"></a>

```python
def reset_template_or_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList">NetworksecuritymanagerPolicyConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRule">template_or_rule</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList">NetworksecuritymanagerPolicyTemplateOrRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">firewall_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublishedInput">is_published_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRuleInput">template_or_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">firewall_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublished">is_published</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configuration"></a>

```python
configuration: NetworksecuritymanagerPolicyConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList">NetworksecuritymanagerPolicyConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `template_or_rule`<sup>Required</sup> <a name="template_or_rule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRule"></a>

```python
template_or_rule: NetworksecuritymanagerPolicyTemplateOrRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList">NetworksecuritymanagerPolicyTemplateOrRuleList</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configurationInput"></a>

```python
configuration_input: IResolvable | typing.List[NetworksecuritymanagerPolicyConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `firewall_type_input`<sup>Optional</sup> <a name="firewall_type_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```python
firewall_type_input: str
```

- *Type:* str

---

##### `is_published_input`<sup>Optional</sup> <a name="is_published_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublishedInput"></a>

```python
is_published_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_or_rule_input`<sup>Optional</sup> <a name="template_or_rule_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRuleInput"></a>

```python
template_or_rule_input: IResolvable | typing.List[NetworksecuritymanagerPolicyTemplateOrRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

---

##### `is_published`<sup>Required</sup> <a name="is_published" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublished"></a>

```python
is_published: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_type: str,
  name: str,
  priority: typing.Union[int, float],
  configuration: IResolvable | typing.List[NetworksecuritymanagerPolicyConfiguration] = None,
  description: str = None,
  is_published: bool | IResolvable = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  template_or_rule: IResolvable | typing.List[NetworksecuritymanagerPolicyTemplateOrRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">firewall_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.configuration">configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.isPublished">is_published</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.templateOrRule">template_or_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]</code> | template_or_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.configuration"></a>

```python
configuration: IResolvable | typing.List[NetworksecuritymanagerPolicyConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#configuration NetworksecuritymanagerPolicy#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}.

---

##### `is_published`<sup>Optional</sup> <a name="is_published" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.isPublished"></a>

```python
is_published: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#region NetworksecuritymanagerPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}.

---

##### `template_or_rule`<sup>Optional</sup> <a name="template_or_rule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.templateOrRule"></a>

```python
template_or_rule: IResolvable | typing.List[NetworksecuritymanagerPolicyTemplateOrRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]

template_or_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_or_rule NetworksecuritymanagerPolicy#template_or_rule}

---

### NetworksecuritymanagerPolicyConfiguration <a name="NetworksecuritymanagerPolicyConfiguration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration(
  remediation_enabled: bool | IResolvable,
  resources_clean_up: bool | IResolvable,
  waf_config: IResolvable | typing.List[NetworksecuritymanagerPolicyConfigurationWafConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.remediationEnabled">remediation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.resourcesCleanUp">resources_clean_up</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.wafConfig">waf_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>]</code> | waf_config block. |

---

##### `remediation_enabled`<sup>Required</sup> <a name="remediation_enabled" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.remediationEnabled"></a>

```python
remediation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}.

---

##### `resources_clean_up`<sup>Required</sup> <a name="resources_clean_up" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.resourcesCleanUp"></a>

```python
resources_clean_up: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}.

---

##### `waf_config`<sup>Optional</sup> <a name="waf_config" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.wafConfig"></a>

```python
waf_config: IResolvable | typing.List[NetworksecuritymanagerPolicyConfigurationWafConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>]

waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyConfigurationWafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig(
  conflict_resolution: str,
  existing_customer_web_acl_resolution: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.conflictResolution">conflict_resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">existing_customer_web_acl_resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}. |

---

##### `conflict_resolution`<sup>Required</sup> <a name="conflict_resolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.conflictResolution"></a>

```python
conflict_resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}.

---

##### `existing_customer_web_acl_resolution`<sup>Required</sup> <a name="existing_customer_web_acl_resolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```python
existing_customer_web_acl_resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}.

---

### NetworksecuritymanagerPolicyTemplateOrRule <a name="NetworksecuritymanagerPolicyTemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule(
  rule_identifier: str = None,
  template_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#rule_identifier NetworksecuritymanagerPolicy#rule_identifier}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.templateIdentifier">template_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_identifier NetworksecuritymanagerPolicy#template_identifier}. |

---

##### `rule_identifier`<sup>Optional</sup> <a name="rule_identifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.ruleIdentifier"></a>

```python
rule_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#rule_identifier NetworksecuritymanagerPolicy#rule_identifier}.

---

##### `template_identifier`<sup>Optional</sup> <a name="template_identifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.templateIdentifier"></a>

```python
template_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_identifier NetworksecuritymanagerPolicy#template_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyConfigurationList <a name="NetworksecuritymanagerPolicyConfigurationList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerPolicyConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerPolicyConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>]

---


### NetworksecuritymanagerPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyConfigurationOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig">put_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resetWafConfig">reset_waf_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_waf_config` <a name="put_waf_config" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig"></a>

```python
def put_waf_config(
  value: IResolvable | typing.List[NetworksecuritymanagerPolicyConfigurationWafConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>]

---

##### `reset_waf_config` <a name="reset_waf_config" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resetWafConfig"></a>

```python
def reset_waf_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfig">waf_config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList">NetworksecuritymanagerPolicyConfigurationWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabledInput">remediation_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUpInput">resources_clean_up_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfigInput">waf_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabled">remediation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUp">resources_clean_up</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `waf_config`<sup>Required</sup> <a name="waf_config" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfig"></a>

```python
waf_config: NetworksecuritymanagerPolicyConfigurationWafConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList">NetworksecuritymanagerPolicyConfigurationWafConfigList</a>

---

##### `remediation_enabled_input`<sup>Optional</sup> <a name="remediation_enabled_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```python
remediation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resources_clean_up_input`<sup>Optional</sup> <a name="resources_clean_up_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```python
resources_clean_up_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `waf_config_input`<sup>Optional</sup> <a name="waf_config_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```python
waf_config_input: IResolvable | typing.List[NetworksecuritymanagerPolicyConfigurationWafConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>]

---

##### `remediation_enabled`<sup>Required</sup> <a name="remediation_enabled" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```python
remediation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resources_clean_up`<sup>Required</sup> <a name="resources_clean_up" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```python
resources_clean_up: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>

---


### NetworksecuritymanagerPolicyConfigurationWafConfigList <a name="NetworksecuritymanagerPolicyConfigurationWafConfigList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerPolicyConfigurationWafConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>]

---


### NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">conflict_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">existing_customer_web_acl_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolution">conflict_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">existing_customer_web_acl_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conflict_resolution_input`<sup>Optional</sup> <a name="conflict_resolution_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```python
conflict_resolution_input: str
```

- *Type:* str

---

##### `existing_customer_web_acl_resolution_input`<sup>Optional</sup> <a name="existing_customer_web_acl_resolution_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```python
existing_customer_web_acl_resolution_input: str
```

- *Type:* str

---

##### `conflict_resolution`<sup>Required</sup> <a name="conflict_resolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```python
conflict_resolution: str
```

- *Type:* str

---

##### `existing_customer_web_acl_resolution`<sup>Required</sup> <a name="existing_customer_web_acl_resolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```python
existing_customer_web_acl_resolution: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerPolicyConfigurationWafConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>

---


### NetworksecuritymanagerPolicyTemplateOrRuleList <a name="NetworksecuritymanagerPolicyTemplateOrRuleList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerPolicyTemplateOrRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerPolicyTemplateOrRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>]

---


### NetworksecuritymanagerPolicyTemplateOrRuleOutputReference <a name="NetworksecuritymanagerPolicyTemplateOrRuleOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetRuleIdentifier">reset_rule_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetTemplateIdentifier">reset_template_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rule_identifier` <a name="reset_rule_identifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetRuleIdentifier"></a>

```python
def reset_rule_identifier() -> None
```

##### `reset_template_identifier` <a name="reset_template_identifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetTemplateIdentifier"></a>

```python
def reset_template_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifierInput">rule_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifierInput">template_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifier">template_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_identifier_input`<sup>Optional</sup> <a name="rule_identifier_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifierInput"></a>

```python
rule_identifier_input: str
```

- *Type:* str

---

##### `template_identifier_input`<sup>Optional</sup> <a name="template_identifier_input" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifierInput"></a>

```python
template_identifier_input: str
```

- *Type:* str

---

##### `rule_identifier`<sup>Required</sup> <a name="rule_identifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifier"></a>

```python
rule_identifier: str
```

- *Type:* str

---

##### `template_identifier`<sup>Required</sup> <a name="template_identifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifier"></a>

```python
template_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerPolicyTemplateOrRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>

---



