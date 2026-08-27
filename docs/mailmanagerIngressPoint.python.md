# `mailmanagerIngressPoint` Submodule <a name="`mailmanagerIngressPoint` Submodule" id="@cdktn/provider-aws.mailmanagerIngressPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerIngressPoint <a name="MailmanagerIngressPoint" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point aws_mailmanager_ingress_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rule_set_id: str,
  traffic_policy_id: str,
  type: str,
  ingress_point_configuration: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfiguration] = None,
  network_configuration: IResolvable | typing.List[MailmanagerIngressPointNetworkConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MailmanagerIngressPointTimeouts = None,
  tls_policy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ruleSetId">rule_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ingressPointConfiguration">ingress_point_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]</code> | ingress_point_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tlsPolicy">tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}.

---

##### `rule_set_id`<sup>Required</sup> <a name="rule_set_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ruleSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}.

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.trafficPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}.

---

##### `ingress_point_configuration`<sup>Optional</sup> <a name="ingress_point_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ingressPointConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]

ingress_point_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ingress_point_configuration MailmanagerIngressPoint#ingress_point_configuration}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.networkConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#network_configuration MailmanagerIngressPoint#network_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#region MailmanagerIngressPoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#timeouts MailmanagerIngressPoint#timeouts}

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tlsPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration">put_ingress_point_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetIngressPointConfiguration">reset_ingress_point_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTlsPolicy">reset_tls_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingress_point_configuration` <a name="put_ingress_point_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration"></a>

```python
def put_ingress_point_configuration(
  value: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  value: IResolvable | typing.List[MailmanagerIngressPointNetworkConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#create MailmanagerIngressPoint#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#delete MailmanagerIngressPoint#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#update MailmanagerIngressPoint#update}

---

##### `reset_ingress_point_configuration` <a name="reset_ingress_point_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetIngressPointConfiguration"></a>

```python
def reset_ingress_point_configuration() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_policy` <a name="reset_tls_policy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTlsPolicy"></a>

```python
def reset_tls_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MailmanagerIngressPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MailmanagerIngressPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MailmanagerIngressPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MailmanagerIngressPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerIngressPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.aRecord">a_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfiguration">ingress_point_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList">MailmanagerIngressPointIngressPointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference">MailmanagerIngressPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfigurationInput">ingress_point_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetIdInput">rule_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicyInput">tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyIdInput">traffic_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetId">rule_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `a_record`<sup>Required</sup> <a name="a_record" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.aRecord"></a>

```python
a_record: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_point_configuration`<sup>Required</sup> <a name="ingress_point_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfiguration"></a>

```python
ingress_point_configuration: MailmanagerIngressPointIngressPointConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList">MailmanagerIngressPointIngressPointConfigurationList</a>

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfiguration"></a>

```python
network_configuration: MailmanagerIngressPointNetworkConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeouts"></a>

```python
timeouts: MailmanagerIngressPointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference">MailmanagerIngressPointTimeoutsOutputReference</a>

---

##### `ingress_point_configuration_input`<sup>Optional</sup> <a name="ingress_point_configuration_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfigurationInput"></a>

```python
ingress_point_configuration_input: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | typing.List[MailmanagerIngressPointNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_set_id_input`<sup>Optional</sup> <a name="rule_set_id_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetIdInput"></a>

```python
rule_set_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MailmanagerIngressPointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---

##### `tls_policy_input`<sup>Optional</sup> <a name="tls_policy_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicyInput"></a>

```python
tls_policy_input: str
```

- *Type:* str

---

##### `traffic_policy_id_input`<sup>Optional</sup> <a name="traffic_policy_id_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyIdInput"></a>

```python
traffic_policy_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rule_set_id`<sup>Required</sup> <a name="rule_set_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetId"></a>

```python
rule_set_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_policy`<sup>Required</sup> <a name="tls_policy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyId"></a>

```python
traffic_policy_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerIngressPointConfig <a name="MailmanagerIngressPointConfig" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rule_set_id: str,
  traffic_policy_id: str,
  type: str,
  ingress_point_configuration: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfiguration] = None,
  network_configuration: IResolvable | typing.List[MailmanagerIngressPointNetworkConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MailmanagerIngressPointTimeouts = None,
  tls_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ruleSetId">rule_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ingressPointConfiguration">ingress_point_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]</code> | ingress_point_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.networkConfiguration">network_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}.

---

##### `rule_set_id`<sup>Required</sup> <a name="rule_set_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ruleSetId"></a>

```python
rule_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}.

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.trafficPolicyId"></a>

```python
traffic_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}.

---

##### `ingress_point_configuration`<sup>Optional</sup> <a name="ingress_point_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ingressPointConfiguration"></a>

```python
ingress_point_configuration: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]

ingress_point_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ingress_point_configuration MailmanagerIngressPoint#ingress_point_configuration}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.networkConfiguration"></a>

```python
network_configuration: IResolvable | typing.List[MailmanagerIngressPointNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#network_configuration MailmanagerIngressPoint#network_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#region MailmanagerIngressPoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.timeouts"></a>

```python
timeouts: MailmanagerIngressPointTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#timeouts MailmanagerIngressPoint#timeouts}

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}.

---

### MailmanagerIngressPointIngressPointConfiguration <a name="MailmanagerIngressPointIngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration(
  secret_arn: str = None,
  smtp_password_wo: str = None,
  smtp_password_wo_version: typing.Union[int, float] = None,
  tls_auth_configuration: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#secret_arn MailmanagerIngressPoint#secret_arn}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWo">smtp_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#smtp_password_wo MailmanagerIngressPoint#smtp_password_wo}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWoVersion">smtp_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#smtp_password_wo_version MailmanagerIngressPoint#smtp_password_wo_version}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration">tls_auth_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>]</code> | tls_auth_configuration block. |

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#secret_arn MailmanagerIngressPoint#secret_arn}.

---

##### `smtp_password_wo`<sup>Optional</sup> <a name="smtp_password_wo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWo"></a>

```python
smtp_password_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#smtp_password_wo MailmanagerIngressPoint#smtp_password_wo}.

---

##### `smtp_password_wo_version`<sup>Optional</sup> <a name="smtp_password_wo_version" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWoVersion"></a>

```python
smtp_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#smtp_password_wo_version MailmanagerIngressPoint#smtp_password_wo_version}.

---

##### `tls_auth_configuration`<sup>Optional</sup> <a name="tls_auth_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration"></a>

```python
tls_auth_configuration: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>]

tls_auth_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tls_auth_configuration MailmanagerIngressPoint#tls_auth_configuration}

---

### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration(
  trust_store: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore">trust_store</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>]</code> | trust_store block. |

---

##### `trust_store`<sup>Optional</sup> <a name="trust_store" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore"></a>

```python
trust_store: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>]

trust_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#trust_store MailmanagerIngressPoint#trust_store}

---

### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore(
  ca_content: str,
  crl_content: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent">ca_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ca_content MailmanagerIngressPoint#ca_content}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent">crl_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#crl_content MailmanagerIngressPoint#crl_content}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#kms_key_arn MailmanagerIngressPoint#kms_key_arn}. |

---

##### `ca_content`<sup>Required</sup> <a name="ca_content" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent"></a>

```python
ca_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ca_content MailmanagerIngressPoint#ca_content}.

---

##### `crl_content`<sup>Optional</sup> <a name="crl_content" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent"></a>

```python
crl_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#crl_content MailmanagerIngressPoint#crl_content}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#kms_key_arn MailmanagerIngressPoint#kms_key_arn}.

---

### MailmanagerIngressPointNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration(
  private_network_configuration: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration] = None,
  public_network_configuration: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration">private_network_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>]</code> | private_network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration">public_network_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>]</code> | public_network_configuration block. |

---

##### `private_network_configuration`<sup>Optional</sup> <a name="private_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration"></a>

```python
private_network_configuration: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>]

private_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#private_network_configuration MailmanagerIngressPoint#private_network_configuration}

---

##### `public_network_configuration`<sup>Optional</sup> <a name="public_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration"></a>

```python
public_network_configuration: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>]

public_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#public_network_configuration MailmanagerIngressPoint#public_network_configuration}

---

### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration(
  vpc_endpoint_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#vpc_endpoint_id MailmanagerIngressPoint#vpc_endpoint_id}. |

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#vpc_endpoint_id MailmanagerIngressPoint#vpc_endpoint_id}.

---

### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration(
  ip_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType">ip_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ip_type MailmanagerIngressPoint#ip_type}. |

---

##### `ip_type`<sup>Required</sup> <a name="ip_type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType"></a>

```python
ip_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ip_type MailmanagerIngressPoint#ip_type}.

---

### MailmanagerIngressPointTimeouts <a name="MailmanagerIngressPointTimeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#create MailmanagerIngressPoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#delete MailmanagerIngressPoint#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#update MailmanagerIngressPoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### MailmanagerIngressPointIngressPointConfigurationList <a name="MailmanagerIngressPointIngressPointConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerIngressPointIngressPointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>]

---


### MailmanagerIngressPointIngressPointConfigurationOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration">put_tls_auth_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWo">reset_smtp_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWoVersion">reset_smtp_password_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration">reset_tls_auth_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tls_auth_configuration` <a name="put_tls_auth_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration"></a>

```python
def put_tls_auth_configuration(
  value: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>]

---

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_smtp_password_wo` <a name="reset_smtp_password_wo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWo"></a>

```python
def reset_smtp_password_wo() -> None
```

##### `reset_smtp_password_wo_version` <a name="reset_smtp_password_wo_version" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWoVersion"></a>

```python
def reset_smtp_password_wo_version() -> None
```

##### `reset_tls_auth_configuration` <a name="reset_tls_auth_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration"></a>

```python
def reset_tls_auth_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration">tls_auth_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoInput">smtp_password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersionInput">smtp_password_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput">tls_auth_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWo">smtp_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersion">smtp_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tls_auth_configuration`<sup>Required</sup> <a name="tls_auth_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration"></a>

```python
tls_auth_configuration: MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList</a>

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `smtp_password_wo_input`<sup>Optional</sup> <a name="smtp_password_wo_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoInput"></a>

```python
smtp_password_wo_input: str
```

- *Type:* str

---

##### `smtp_password_wo_version_input`<sup>Optional</sup> <a name="smtp_password_wo_version_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersionInput"></a>

```python
smtp_password_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_auth_configuration_input`<sup>Optional</sup> <a name="tls_auth_configuration_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput"></a>

```python
tls_auth_configuration_input: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>]

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### ~~`smtp_password_wo`~~<sup>Required</sup> <a name="smtp_password_wo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
smtp_password_wo: str
```

- *Type:* str

---

##### `smtp_password_wo_version`<sup>Required</sup> <a name="smtp_password_wo_version" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersion"></a>

```python
smtp_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerIngressPointIngressPointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>]

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore">put_trust_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore">reset_trust_store</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trust_store` <a name="put_trust_store" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore"></a>

```python
def put_trust_store(
  value: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>]

---

##### `reset_trust_store` <a name="reset_trust_store" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore"></a>

```python
def reset_trust_store() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore">trust_store</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput">trust_store_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore"></a>

```python
trust_store: MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList</a>

---

##### `trust_store_input`<sup>Optional</sup> <a name="trust_store_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput"></a>

```python
trust_store_input: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>]

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent">reset_crl_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crl_content` <a name="reset_crl_content" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent"></a>

```python
def reset_crl_content() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput">ca_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput">crl_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent">ca_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent">crl_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_content_input`<sup>Optional</sup> <a name="ca_content_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput"></a>

```python
ca_content_input: str
```

- *Type:* str

---

##### `crl_content_input`<sup>Optional</sup> <a name="crl_content_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput"></a>

```python
crl_content_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `ca_content`<sup>Required</sup> <a name="ca_content" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent"></a>

```python
ca_content: str
```

- *Type:* str

---

##### `crl_content`<sup>Required</sup> <a name="crl_content" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent"></a>

```python
crl_content: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---


### MailmanagerIngressPointNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerIngressPointNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerIngressPointNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>]

---


### MailmanagerIngressPointNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration">put_private_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration">put_public_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration">reset_private_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration">reset_public_network_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_private_network_configuration` <a name="put_private_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration"></a>

```python
def put_private_network_configuration(
  value: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>]

---

##### `put_public_network_configuration` <a name="put_public_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration"></a>

```python
def put_public_network_configuration(
  value: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>]

---

##### `reset_private_network_configuration` <a name="reset_private_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration"></a>

```python
def reset_private_network_configuration() -> None
```

##### `reset_public_network_configuration` <a name="reset_public_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration"></a>

```python
def reset_public_network_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration">private_network_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration">public_network_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput">private_network_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput">public_network_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_network_configuration`<sup>Required</sup> <a name="private_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration"></a>

```python
private_network_configuration: MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList</a>

---

##### `public_network_configuration`<sup>Required</sup> <a name="public_network_configuration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration"></a>

```python
public_network_configuration: MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList</a>

---

##### `private_network_configuration_input`<sup>Optional</sup> <a name="private_network_configuration_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput"></a>

```python
private_network_configuration_input: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>]

---

##### `public_network_configuration_input`<sup>Optional</sup> <a name="public_network_configuration_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput"></a>

```python
public_network_configuration_input: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerIngressPointNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>

---


### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>]

---


### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---


### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>]

---


### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput">ip_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType">ip_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_type_input`<sup>Optional</sup> <a name="ip_type_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput"></a>

```python
ip_type_input: str
```

- *Type:* str

---

##### `ip_type`<sup>Required</sup> <a name="ip_type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType"></a>

```python
ip_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---


### MailmanagerIngressPointTimeoutsOutputReference <a name="MailmanagerIngressPointTimeoutsOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_ingress_point

mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerIngressPointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---



