# `dataAwsSecurityhubSecurityControls` Submodule <a name="`dataAwsSecurityhubSecurityControls` Submodule" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubSecurityControls <a name="DataAwsSecurityhubSecurityControls" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/securityhub_security_controls aws_securityhub_security_controls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

dataawssecurityhubsecuritycontrols.NewDataAwsSecurityhubSecurityControls(scope Construct, id *string, config DataAwsSecurityhubSecurityControlsConfig) DataAwsSecurityhubSecurityControls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig">DataAwsSecurityhubSecurityControlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig">DataAwsSecurityhubSecurityControlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetStandardsArn">ResetStandardsArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStandardsArn` <a name="ResetStandardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetStandardsArn"></a>

```go
func ResetStandardsArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSecurityhubSecurityControls resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

dataawssecurityhubsecuritycontrols.DataAwsSecurityhubSecurityControls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

dataawssecurityhubsecuritycontrols.DataAwsSecurityhubSecurityControls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

dataawssecurityhubsecuritycontrols.DataAwsSecurityhubSecurityControls_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

dataawssecurityhubsecuritycontrols.DataAwsSecurityhubSecurityControls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsSecurityhubSecurityControls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSecurityhubSecurityControls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSecurityhubSecurityControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/securityhub_security_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubSecurityControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.securityControlDefinitions">SecurityControlDefinitions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList">DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArnInput">StandardsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArn">StandardsArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `SecurityControlDefinitions`<sup>Required</sup> <a name="SecurityControlDefinitions" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.securityControlDefinitions"></a>

```go
func SecurityControlDefinitions() DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList">DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StandardsArnInput`<sup>Optional</sup> <a name="StandardsArnInput" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArnInput"></a>

```go
func StandardsArnInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StandardsArn`<sup>Required</sup> <a name="StandardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArn"></a>

```go
func StandardsArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubSecurityControlsConfig <a name="DataAwsSecurityhubSecurityControlsConfig" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

&dataawssecurityhubsecuritycontrols.DataAwsSecurityhubSecurityControlsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
	StandardsArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.standardsArn">StandardsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/securityhub_security_controls#region DataAwsSecurityhubSecurityControls#region}

---

##### `StandardsArn`<sup>Optional</sup> <a name="StandardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.standardsArn"></a>

```go
StandardsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}.

---

### DataAwsSecurityhubSecurityControlsSecurityControlDefinitions <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitions" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

&dataawssecurityhubsecuritycontrols.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

dataawssecurityhubsecuritycontrols.NewDataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawssecurityhubsecuritycontrols"

dataawssecurityhubsecuritycontrols.NewDataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.currentRegionAvailability">CurrentRegionAvailability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.customizableProperties">CustomizableProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.remediationUrl">RemediationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.severityRating">SeverityRating</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions">DataAwsSecurityhubSecurityControlsSecurityControlDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentRegionAvailability`<sup>Required</sup> <a name="CurrentRegionAvailability" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.currentRegionAvailability"></a>

```go
func CurrentRegionAvailability() *string
```

- *Type:* *string

---

##### `CustomizableProperties`<sup>Required</sup> <a name="CustomizableProperties" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.customizableProperties"></a>

```go
func CustomizableProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RemediationUrl`<sup>Required</sup> <a name="RemediationUrl" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.remediationUrl"></a>

```go
func RemediationUrl() *string
```

- *Type:* *string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.securityControlId"></a>

```go
func SecurityControlId() *string
```

- *Type:* *string

---

##### `SeverityRating`<sup>Required</sup> <a name="SeverityRating" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.severityRating"></a>

```go
func SeverityRating() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSecurityhubSecurityControlsSecurityControlDefinitions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions">DataAwsSecurityhubSecurityControlsSecurityControlDefinitions</a>

---



