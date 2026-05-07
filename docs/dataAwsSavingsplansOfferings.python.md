# `dataAwsSavingsplansOfferings` Submodule <a name="`dataAwsSavingsplansOfferings` Submodule" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSavingsplansOfferings <a name="DataAwsSavingsplansOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings aws_savingsplans_offerings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  currencies: typing.List[str] = None,
  descriptions: typing.List[str] = None,
  durations: typing.List[typing.Union[int, float]] = None,
  filter: IResolvable | typing.List[DataAwsSavingsplansOfferingsFilter] = None,
  offering_ids: typing.List[str] = None,
  operations: typing.List[str] = None,
  payment_options: typing.List[str] = None,
  plan_types: typing.List[str] = None,
  product_type: str = None,
  service_codes: typing.List[str] = None,
  usage_types: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.currencies">currencies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.descriptions">descriptions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.durations">durations</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.offeringIds">offering_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.operations">operations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.paymentOptions">payment_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.planTypes">plan_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.productType">product_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.serviceCodes">service_codes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.usageTypes">usage_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `currencies`<sup>Optional</sup> <a name="currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.currencies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}.

---

##### `descriptions`<sup>Optional</sup> <a name="descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.descriptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}.

---

##### `durations`<sup>Optional</sup> <a name="durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.durations"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#filter DataAwsSavingsplansOfferings#filter}

---

##### `offering_ids`<sup>Optional</sup> <a name="offering_ids" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.offeringIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}.

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.operations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}.

---

##### `payment_options`<sup>Optional</sup> <a name="payment_options" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.paymentOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}.

---

##### `plan_types`<sup>Optional</sup> <a name="plan_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.planTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}.

---

##### `product_type`<sup>Optional</sup> <a name="product_type" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.productType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}.

---

##### `service_codes`<sup>Optional</sup> <a name="service_codes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.serviceCodes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}.

---

##### `usage_types`<sup>Optional</sup> <a name="usage_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.usageTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetCurrencies">reset_currencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDescriptions">reset_descriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDurations">reset_durations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOfferingIds">reset_offering_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPaymentOptions">reset_payment_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPlanTypes">reset_plan_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetProductType">reset_product_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetServiceCodes">reset_service_codes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetUsageTypes">reset_usage_types</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataAwsSavingsplansOfferingsFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]

---

##### `reset_currencies` <a name="reset_currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetCurrencies"></a>

```python
def reset_currencies() -> None
```

##### `reset_descriptions` <a name="reset_descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDescriptions"></a>

```python
def reset_descriptions() -> None
```

##### `reset_durations` <a name="reset_durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDurations"></a>

```python
def reset_durations() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_offering_ids` <a name="reset_offering_ids" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOfferingIds"></a>

```python
def reset_offering_ids() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_payment_options` <a name="reset_payment_options" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPaymentOptions"></a>

```python
def reset_payment_options() -> None
```

##### `reset_plan_types` <a name="reset_plan_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPlanTypes"></a>

```python
def reset_plan_types() -> None
```

##### `reset_product_type` <a name="reset_product_type" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetProductType"></a>

```python
def reset_product_type() -> None
```

##### `reset_service_codes` <a name="reset_service_codes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetServiceCodes"></a>

```python
def reset_service_codes() -> None
```

##### `reset_usage_types` <a name="reset_usage_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetUsageTypes"></a>

```python
def reset_usage_types() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSavingsplansOfferings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSavingsplansOfferings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSavingsplansOfferings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings">offerings</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput">currencies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput">descriptions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput">durations_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput">offering_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput">operations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput">payment_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput">plan_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput">product_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput">service_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput">usage_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies">currencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions">descriptions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations">durations</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds">offering_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations">operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions">payment_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes">plan_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType">product_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes">service_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes">usage_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter"></a>

```python
filter: DataAwsSavingsplansOfferingsFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a>

---

##### `offerings`<sup>Required</sup> <a name="offerings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings"></a>

```python
offerings: DataAwsSavingsplansOfferingsOfferingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a>

---

##### `currencies_input`<sup>Optional</sup> <a name="currencies_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput"></a>

```python
currencies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `descriptions_input`<sup>Optional</sup> <a name="descriptions_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput"></a>

```python
descriptions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `durations_input`<sup>Optional</sup> <a name="durations_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput"></a>

```python
durations_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataAwsSavingsplansOfferingsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]

---

##### `offering_ids_input`<sup>Optional</sup> <a name="offering_ids_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput"></a>

```python
offering_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput"></a>

```python
operations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payment_options_input`<sup>Optional</sup> <a name="payment_options_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput"></a>

```python
payment_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `plan_types_input`<sup>Optional</sup> <a name="plan_types_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput"></a>

```python
plan_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product_type_input`<sup>Optional</sup> <a name="product_type_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput"></a>

```python
product_type_input: str
```

- *Type:* str

---

##### `service_codes_input`<sup>Optional</sup> <a name="service_codes_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput"></a>

```python
service_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage_types_input`<sup>Optional</sup> <a name="usage_types_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput"></a>

```python
usage_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `currencies`<sup>Required</sup> <a name="currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies"></a>

```python
currencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `descriptions`<sup>Required</sup> <a name="descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions"></a>

```python
descriptions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `durations`<sup>Required</sup> <a name="durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations"></a>

```python
durations: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `offering_ids`<sup>Required</sup> <a name="offering_ids" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds"></a>

```python
offering_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payment_options`<sup>Required</sup> <a name="payment_options" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions"></a>

```python
payment_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `plan_types`<sup>Required</sup> <a name="plan_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes"></a>

```python
plan_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product_type`<sup>Required</sup> <a name="product_type" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType"></a>

```python
product_type: str
```

- *Type:* str

---

##### `service_codes`<sup>Required</sup> <a name="service_codes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes"></a>

```python
service_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage_types`<sup>Required</sup> <a name="usage_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes"></a>

```python
usage_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSavingsplansOfferingsConfig <a name="DataAwsSavingsplansOfferingsConfig" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  currencies: typing.List[str] = None,
  descriptions: typing.List[str] = None,
  durations: typing.List[typing.Union[int, float]] = None,
  filter: IResolvable | typing.List[DataAwsSavingsplansOfferingsFilter] = None,
  offering_ids: typing.List[str] = None,
  operations: typing.List[str] = None,
  payment_options: typing.List[str] = None,
  plan_types: typing.List[str] = None,
  product_type: str = None,
  service_codes: typing.List[str] = None,
  usage_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies">currencies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions">descriptions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations">durations</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds">offering_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations">operations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions">payment_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes">plan_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType">product_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes">service_codes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes">usage_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `currencies`<sup>Optional</sup> <a name="currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies"></a>

```python
currencies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}.

---

##### `descriptions`<sup>Optional</sup> <a name="descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions"></a>

```python
descriptions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}.

---

##### `durations`<sup>Optional</sup> <a name="durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations"></a>

```python
durations: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataAwsSavingsplansOfferingsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#filter DataAwsSavingsplansOfferings#filter}

---

##### `offering_ids`<sup>Optional</sup> <a name="offering_ids" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds"></a>

```python
offering_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}.

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}.

---

##### `payment_options`<sup>Optional</sup> <a name="payment_options" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions"></a>

```python
payment_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}.

---

##### `plan_types`<sup>Optional</sup> <a name="plan_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes"></a>

```python
plan_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}.

---

##### `product_type`<sup>Optional</sup> <a name="product_type" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType"></a>

```python
product_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}.

---

##### `service_codes`<sup>Optional</sup> <a name="service_codes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes"></a>

```python
service_codes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}.

---

##### `usage_types`<sup>Optional</sup> <a name="usage_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes"></a>

```python
usage_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}.

---

### DataAwsSavingsplansOfferingsFilter <a name="DataAwsSavingsplansOfferingsFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}.

---

### DataAwsSavingsplansOfferingsOfferings <a name="DataAwsSavingsplansOfferingsOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings()
```


### DataAwsSavingsplansOfferingsOfferingsProperties <a name="DataAwsSavingsplansOfferingsOfferingsProperties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSavingsplansOfferingsFilterList <a name="DataAwsSavingsplansOfferingsFilterList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSavingsplansOfferingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsSavingsplansOfferingsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>]

---


### DataAwsSavingsplansOfferingsFilterOutputReference <a name="DataAwsSavingsplansOfferingsFilterOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsSavingsplansOfferingsFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>

---


### DataAwsSavingsplansOfferingsOfferingsList <a name="DataAwsSavingsplansOfferingsOfferingsList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSavingsplansOfferingsOfferingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSavingsplansOfferingsOfferingsOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency">currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId">offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption">payment_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes">product_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode">service_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType">usage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency"></a>

```python
currency: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offering_id`<sup>Required</sup> <a name="offering_id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId"></a>

```python
offering_id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `payment_option`<sup>Required</sup> <a name="payment_option" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption"></a>

```python
payment_option: str
```

- *Type:* str

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `product_types`<sup>Required</sup> <a name="product_types" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes"></a>

```python
product_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties"></a>

```python
properties: DataAwsSavingsplansOfferingsOfferingsPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a>

---

##### `service_code`<sup>Required</sup> <a name="service_code" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode"></a>

```python
service_code: str
```

- *Type:* str

---

##### `usage_type`<sup>Required</sup> <a name="usage_type" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType"></a>

```python
usage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSavingsplansOfferingsOfferings
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a>

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesList <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_savingsplans_offerings

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSavingsplansOfferingsOfferingsProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a>

---



