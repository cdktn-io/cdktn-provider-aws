# `dataAwsSecurityhubEnabledStandards` Submodule <a name="`dataAwsSecurityhubEnabledStandards` Submodule" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubEnabledStandards <a name="DataAwsSecurityhubEnabledStandards" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards aws_securityhub_enabled_standards}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.NewDataAwsSecurityhubEnabledStandards(scope Construct, id *string, config DataAwsSecurityhubEnabledStandardsConfig) DataAwsSecurityhubEnabledStandards
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig">DataAwsSecurityhubEnabledStandardsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig">DataAwsSecurityhubEnabledStandardsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetStandardsSubscriptionArns">ResetStandardsSubscriptionArns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStandardsSubscriptionArns` <a name="ResetStandardsSubscriptionArns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetStandardsSubscriptionArns"></a>

```go
func ResetStandardsSubscriptionArns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSecurityhubEnabledStandards resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.DataAwsSecurityhubEnabledStandards_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.DataAwsSecurityhubEnabledStandards_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.DataAwsSecurityhubEnabledStandards_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.DataAwsSecurityhubEnabledStandards_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsSecurityhubEnabledStandards resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSecurityhubEnabledStandards to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSecurityhubEnabledStandards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubEnabledStandards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptions">StandardsSubscriptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArnsInput">StandardsSubscriptionArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArns">StandardsSubscriptionArns</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `StandardsSubscriptions`<sup>Required</sup> <a name="StandardsSubscriptions" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptions"></a>

```go
func StandardsSubscriptions() DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StandardsSubscriptionArnsInput`<sup>Optional</sup> <a name="StandardsSubscriptionArnsInput" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArnsInput"></a>

```go
func StandardsSubscriptionArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StandardsSubscriptionArns`<sup>Required</sup> <a name="StandardsSubscriptionArns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArns"></a>

```go
func StandardsSubscriptionArns() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubEnabledStandardsConfig <a name="DataAwsSecurityhubEnabledStandardsConfig" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

&dataawssecurityhubenabledstandards.DataAwsSecurityhubEnabledStandardsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
	StandardsSubscriptionArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.standardsSubscriptionArns">StandardsSubscriptionArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards#region DataAwsSecurityhubEnabledStandards#region}

---

##### `StandardsSubscriptionArns`<sup>Optional</sup> <a name="StandardsSubscriptionArns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.standardsSubscriptionArns"></a>

```go
StandardsSubscriptionArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}.

---

### DataAwsSecurityhubEnabledStandardsStandardsSubscriptions <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptions" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

&dataawssecurityhubenabledstandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions {

}
```


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

&dataawssecurityhubenabledstandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.NewDataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get"></a>

```go
func Get(index *f64) DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.NewDataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsArn">StandardsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsControlsUpdatable">StandardsControlsUpdatable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsInputs">StandardsInputs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatus">StandardsStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatusReason">StandardsStatusReason</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsSubscriptionArn">StandardsSubscriptionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions">DataAwsSecurityhubEnabledStandardsStandardsSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StandardsArn`<sup>Required</sup> <a name="StandardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsArn"></a>

```go
func StandardsArn() *string
```

- *Type:* *string

---

##### `StandardsControlsUpdatable`<sup>Required</sup> <a name="StandardsControlsUpdatable" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsControlsUpdatable"></a>

```go
func StandardsControlsUpdatable() *string
```

- *Type:* *string

---

##### `StandardsInputs`<sup>Required</sup> <a name="StandardsInputs" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsInputs"></a>

```go
func StandardsInputs() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `StandardsStatus`<sup>Required</sup> <a name="StandardsStatus" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatus"></a>

```go
func StandardsStatus() *string
```

- *Type:* *string

---

##### `StandardsStatusReason`<sup>Required</sup> <a name="StandardsStatusReason" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatusReason"></a>

```go
func StandardsStatusReason() DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList</a>

---

##### `StandardsSubscriptionArn`<sup>Required</sup> <a name="StandardsSubscriptionArn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsSubscriptionArn"></a>

```go
func StandardsSubscriptionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSecurityhubEnabledStandardsStandardsSubscriptions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions">DataAwsSecurityhubEnabledStandardsStandardsSubscriptions</a>

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.NewDataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get"></a>

```go
func Get(index *f64) DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubenabledstandards"

dataawssecurityhubenabledstandards.NewDataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.statusReasonCode">StatusReasonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusReasonCode`<sup>Required</sup> <a name="StatusReasonCode" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.statusReasonCode"></a>

```go
func StatusReasonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason</a>

---



