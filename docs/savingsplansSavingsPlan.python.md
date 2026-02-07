# `savingsplansSavingsPlan` Submodule <a name="`savingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.savingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SavingsplansSavingsPlan <a name="SavingsplansSavingsPlan" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  commitment: str,
  savings_plan_offering_id: str,
  purchase_time: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SavingsplansSavingsPlanTimeouts = None,
  upfront_payment_amount: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.commitment">commitment</a></code> | <code>str</code> | The hourly commitment, in USD. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.savingsPlanOfferingId">savings_plan_offering_id</a></code> | <code>str</code> | The unique ID of a Savings Plan offering. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.purchaseTime">purchase_time</a></code> | <code>str</code> | The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.upfrontPaymentAmount">upfront_payment_amount</a></code> | <code>str</code> | The up-front payment amount. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.commitment"></a>

- *Type:* str

The hourly commitment, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}

---

##### `savings_plan_offering_id`<sup>Required</sup> <a name="savings_plan_offering_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.savingsPlanOfferingId"></a>

- *Type:* str

The unique ID of a Savings Plan offering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}

---

##### `purchase_time`<sup>Optional</sup> <a name="purchase_time" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.purchaseTime"></a>

- *Type:* str

The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}

---

##### `upfront_payment_amount`<sup>Optional</sup> <a name="upfront_payment_amount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.upfrontPaymentAmount"></a>

- *Type:* str

The up-front payment amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime">reset_purchase_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount">reset_upfront_payment_amount</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#create SavingsplansSavingsPlan#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#delete SavingsplansSavingsPlan#delete}

---

##### `reset_purchase_time` <a name="reset_purchase_time" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime"></a>

```python
def reset_purchase_time() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upfront_payment_amount` <a name="reset_upfront_payment_amount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount"></a>

```python
def reset_upfront_payment_amount() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SavingsplansSavingsPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency">currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily">ec2_instance_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId">offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption">payment_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes">product_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount">recurring_payment_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil">returnable_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn">savings_plan_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId">savings_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType">savings_plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds">term_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput">commitment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput">purchase_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput">savings_plan_offering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput">upfront_payment_amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment">commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime">purchase_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId">savings_plan_offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount">upfront_payment_amount</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency"></a>

```python
currency: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ec2_instance_family`<sup>Required</sup> <a name="ec2_instance_family" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```python
ec2_instance_family: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `offering_id`<sup>Required</sup> <a name="offering_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId"></a>

```python
offering_id: str
```

- *Type:* str

---

##### `payment_option`<sup>Required</sup> <a name="payment_option" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption"></a>

```python
payment_option: str
```

- *Type:* str

---

##### `product_types`<sup>Required</sup> <a name="product_types" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes"></a>

```python
product_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recurring_payment_amount`<sup>Required</sup> <a name="recurring_payment_amount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```python
recurring_payment_amount: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `returnable_until`<sup>Required</sup> <a name="returnable_until" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil"></a>

```python
returnable_until: str
```

- *Type:* str

---

##### `savings_plan_arn`<sup>Required</sup> <a name="savings_plan_arn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn"></a>

```python
savings_plan_arn: str
```

- *Type:* str

---

##### `savings_plan_id`<sup>Required</sup> <a name="savings_plan_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId"></a>

```python
savings_plan_id: str
```

- *Type:* str

---

##### `savings_plan_type`<sup>Required</sup> <a name="savings_plan_type" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType"></a>

```python
savings_plan_type: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `term_duration_in_seconds`<sup>Required</sup> <a name="term_duration_in_seconds" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```python
term_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts"></a>

```python
timeouts: SavingsplansSavingsPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a>

---

##### `commitment_input`<sup>Optional</sup> <a name="commitment_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput"></a>

```python
commitment_input: str
```

- *Type:* str

---

##### `purchase_time_input`<sup>Optional</sup> <a name="purchase_time_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput"></a>

```python
purchase_time_input: str
```

- *Type:* str

---

##### `savings_plan_offering_id_input`<sup>Optional</sup> <a name="savings_plan_offering_id_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput"></a>

```python
savings_plan_offering_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SavingsplansSavingsPlanTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `upfront_payment_amount_input`<sup>Optional</sup> <a name="upfront_payment_amount_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput"></a>

```python
upfront_payment_amount_input: str
```

- *Type:* str

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment"></a>

```python
commitment: str
```

- *Type:* str

---

##### `purchase_time`<sup>Required</sup> <a name="purchase_time" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime"></a>

```python
purchase_time: str
```

- *Type:* str

---

##### `savings_plan_offering_id`<sup>Required</sup> <a name="savings_plan_offering_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```python
savings_plan_offering_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `upfront_payment_amount`<sup>Required</sup> <a name="upfront_payment_amount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```python
upfront_payment_amount: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SavingsplansSavingsPlanConfig <a name="SavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.Initializer"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  commitment: str,
  savings_plan_offering_id: str,
  purchase_time: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SavingsplansSavingsPlanTimeouts = None,
  upfront_payment_amount: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment">commitment</a></code> | <code>str</code> | The hourly commitment, in USD. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId">savings_plan_offering_id</a></code> | <code>str</code> | The unique ID of a Savings Plan offering. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime">purchase_time</a></code> | <code>str</code> | The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount">upfront_payment_amount</a></code> | <code>str</code> | The up-front payment amount. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment"></a>

```python
commitment: str
```

- *Type:* str

The hourly commitment, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}

---

##### `savings_plan_offering_id`<sup>Required</sup> <a name="savings_plan_offering_id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId"></a>

```python
savings_plan_offering_id: str
```

- *Type:* str

The unique ID of a Savings Plan offering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}

---

##### `purchase_time`<sup>Optional</sup> <a name="purchase_time" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime"></a>

```python
purchase_time: str
```

- *Type:* str

The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts"></a>

```python
timeouts: SavingsplansSavingsPlanTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}

---

##### `upfront_payment_amount`<sup>Optional</sup> <a name="upfront_payment_amount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount"></a>

```python
upfront_payment_amount: str
```

- *Type:* str

The up-front payment amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}

---

### SavingsplansSavingsPlanTimeouts <a name="SavingsplansSavingsPlanTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#create SavingsplansSavingsPlan#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#delete SavingsplansSavingsPlan#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### SavingsplansSavingsPlanTimeoutsOutputReference <a name="SavingsplansSavingsPlanTimeoutsOutputReference" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import savingsplans_savings_plan

savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SavingsplansSavingsPlanTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---



