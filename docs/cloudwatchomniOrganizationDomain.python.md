# `cloudwatchomniOrganizationDomain` Submodule <a name="`cloudwatchomniOrganizationDomain` Submodule" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniOrganizationDomain <a name="CloudwatchomniOrganizationDomain" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain aws_cloudwatchomni_organization_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_access_role_arn: str,
  identity_providers: typing.List[str],
  name: str,
  identity_provider_configuration: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.domainAccessRoleArn">domain_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.identityProviders">identity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.identityProviderConfiguration">identity_provider_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]</code> | identity_provider_configuration block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_access_role_arn`<sup>Required</sup> <a name="domain_access_role_arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.domainAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}.

---

##### `identity_providers`<sup>Required</sup> <a name="identity_providers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.identityProviders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}.

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.identityProviderConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]

identity_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_provider_configuration CloudwatchomniOrganizationDomain#identity_provider_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#region CloudwatchomniOrganizationDomain#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration">put_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetIdentityProviderConfiguration">reset_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity_provider_configuration` <a name="put_identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration"></a>

```python
def put_identity_provider_configuration(
  value: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]

---

##### `reset_identity_provider_configuration` <a name="reset_identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetIdentityProviderConfiguration"></a>

```python
def reset_identity_provider_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchomniOrganizationDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchomniOrganizationDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchomniOrganizationDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchomniOrganizationDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniOrganizationDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.customEndpointUrls">custom_endpoint_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainEndpointUrl">domain_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityCenterApplicationArn">identity_center_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArnInput">domain_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfigurationInput">identity_provider_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProvidersInput">identity_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArn">domain_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviders">identity_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_endpoint_urls`<sup>Required</sup> <a name="custom_endpoint_urls" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.customEndpointUrls"></a>

```python
custom_endpoint_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_endpoint_url`<sup>Required</sup> <a name="domain_endpoint_url" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainEndpointUrl"></a>

```python
domain_endpoint_url: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `identity_center_application_arn`<sup>Required</sup> <a name="identity_center_application_arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityCenterApplicationArn"></a>

```python
identity_center_application_arn: str
```

- *Type:* str

---

##### `identity_provider_configuration`<sup>Required</sup> <a name="identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: CloudwatchomniOrganizationDomainIdentityProviderConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationList</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `domain_access_role_arn_input`<sup>Optional</sup> <a name="domain_access_role_arn_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArnInput"></a>

```python
domain_access_role_arn_input: str
```

- *Type:* str

---

##### `identity_provider_configuration_input`<sup>Optional</sup> <a name="identity_provider_configuration_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfigurationInput"></a>

```python
identity_provider_configuration_input: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]

---

##### `identity_providers_input`<sup>Optional</sup> <a name="identity_providers_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProvidersInput"></a>

```python
identity_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_access_role_arn`<sup>Required</sup> <a name="domain_access_role_arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArn"></a>

```python
domain_access_role_arn: str
```

- *Type:* str

---

##### `identity_providers`<sup>Required</sup> <a name="identity_providers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviders"></a>

```python
identity_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniOrganizationDomainConfig <a name="CloudwatchomniOrganizationDomainConfig" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_access_role_arn: str,
  identity_providers: typing.List[str],
  name: str,
  identity_provider_configuration: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.domainAccessRoleArn">domain_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviders">identity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]</code> | identity_provider_configuration block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_access_role_arn`<sup>Required</sup> <a name="domain_access_role_arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.domainAccessRoleArn"></a>

```python
domain_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}.

---

##### `identity_providers`<sup>Required</sup> <a name="identity_providers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviders"></a>

```python
identity_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}.

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]

identity_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_provider_configuration CloudwatchomniOrganizationDomain#identity_provider_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#region CloudwatchomniOrganizationDomain#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}.

---

### CloudwatchomniOrganizationDomainIdentityProviderConfiguration <a name="CloudwatchomniOrganizationDomainIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration(
  identity_center_configuration: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.property.identityCenterConfiguration">identity_center_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]</code> | identity_center_configuration block. |

---

##### `identity_center_configuration`<sup>Optional</sup> <a name="identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.property.identityCenterConfiguration"></a>

```python
identity_center_configuration: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

identity_center_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_configuration CloudwatchomniOrganizationDomain#identity_center_configuration}

---

### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration(
  identity_center_instance_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_instance_arn CloudwatchomniOrganizationDomain#identity_center_instance_arn}. |

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_instance_arn CloudwatchomniOrganizationDomain#identity_center_instance_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput">identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center_instance_arn_input`<sup>Optional</sup> <a name="identity_center_instance_arn_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput"></a>

```python
identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationList <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationList" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>]

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_organization_domain

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration">put_identity_center_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration">reset_identity_center_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_identity_center_configuration` <a name="put_identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration"></a>

```python
def put_identity_center_configuration(
  value: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

---

##### `reset_identity_center_configuration` <a name="reset_identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration"></a>

```python
def reset_identity_center_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration">identity_center_configuration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput">identity_center_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center_configuration`<sup>Required</sup> <a name="identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration"></a>

```python
identity_center_configuration: CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a>

---

##### `identity_center_configuration_input`<sup>Optional</sup> <a name="identity_center_configuration_input" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput"></a>

```python
identity_center_configuration_input: IResolvable | typing.List[CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>

---



