# `dataAwsLambdamicrovmsImageVersion` Submodule <a name="`dataAwsLambdamicrovmsImageVersion` Submodule" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdamicrovmsImageVersion <a name="DataAwsLambdamicrovmsImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version aws_lambdamicrovms_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersion(scope Construct, id *string, config DataAwsLambdamicrovmsImageVersionConfig) DataAwsLambdamicrovmsImageVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig">DataAwsLambdamicrovmsImageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig">DataAwsLambdamicrovmsImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsLambdamicrovmsImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsLambdamicrovmsImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdamicrovmsImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn">BaseImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion">BaseImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn">BuildRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration">CpuConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks">Hooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput">ImageIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput">ImageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier">ImageIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities"></a>

```go
func AdditionalOsCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn"></a>

```go
func BaseImageArn() *string
```

- *Type:* *string

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion"></a>

```go
func BaseImageVersion() *string
```

- *Type:* *string

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn"></a>

```go
func BuildRoleArn() *string
```

- *Type:* *string

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact"></a>

```go
func CodeArtifact() DataAwsLambdamicrovmsImageVersionCodeArtifactList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a>

---

##### `CpuConfiguration`<sup>Required</sup> <a name="CpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration"></a>

```go
func CpuConfiguration() DataAwsLambdamicrovmsImageVersionCpuConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors"></a>

```go
func EgressNetworkConnectors() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks"></a>

```go
func Hooks() DataAwsLambdamicrovmsImageVersionHooksList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a>

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging"></a>

```go
func Logging() DataAwsLambdamicrovmsImageVersionLoggingList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources"></a>

```go
func Resources() DataAwsLambdamicrovmsImageVersionResourcesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ImageIdentifierInput`<sup>Optional</sup> <a name="ImageIdentifierInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput"></a>

```go
func ImageIdentifierInput() *string
```

- *Type:* *string

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput"></a>

```go
func ImageVersionInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ImageIdentifier`<sup>Required</sup> <a name="ImageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier"></a>

```go
func ImageIdentifier() *string
```

- *Type:* *string

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion"></a>

```go
func ImageVersion() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifact <a name="DataAwsLambdamicrovmsImageVersionCodeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionCodeArtifact {

}
```


### DataAwsLambdamicrovmsImageVersionConfig <a name="DataAwsLambdamicrovmsImageVersionConfig" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ImageIdentifier: *string,
	ImageVersion: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier">ImageIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImageIdentifier`<sup>Required</sup> <a name="ImageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier"></a>

```go
ImageIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}.

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion"></a>

```go
ImageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}

---

### DataAwsLambdamicrovmsImageVersionCpuConfiguration <a name="DataAwsLambdamicrovmsImageVersionCpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionCpuConfiguration {

}
```


### DataAwsLambdamicrovmsImageVersionHooks <a name="DataAwsLambdamicrovmsImageVersionHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionHooks {

}
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks {

}
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks {

}
```


### DataAwsLambdamicrovmsImageVersionLogging <a name="DataAwsLambdamicrovmsImageVersionLogging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionLogging {

}
```


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatch <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch {

}
```


### DataAwsLambdamicrovmsImageVersionLoggingDisabled <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionLoggingDisabled {

}
```


### DataAwsLambdamicrovmsImageVersionResources <a name="DataAwsLambdamicrovmsImageVersionResources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

&dataawslambdamicrovmsimageversion.DataAwsLambdamicrovmsImageVersionResources {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifactList <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionCodeArtifactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionCodeArtifactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionCodeArtifact
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a>

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationList <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionCpuConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionCpuConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionCpuConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a>

---


### DataAwsLambdamicrovmsImageVersionHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionHooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionHooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume">Resume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">ResumeTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run">Run</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">RunTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend">Suspend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">SuspendTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate">Terminate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">TerminateTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resume`<sup>Required</sup> <a name="Resume" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume"></a>

```go
func Resume() *string
```

- *Type:* *string

---

##### `ResumeTimeoutInSeconds`<sup>Required</sup> <a name="ResumeTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```go
func ResumeTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run"></a>

```go
func Run() *string
```

- *Type:* *string

---

##### `RunTimeoutInSeconds`<sup>Required</sup> <a name="RunTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```go
func RunTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend"></a>

```go
func Suspend() *string
```

- *Type:* *string

---

##### `SuspendTimeoutInSeconds`<sup>Required</sup> <a name="SuspendTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```go
func SuspendTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Terminate`<sup>Required</sup> <a name="Terminate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate"></a>

```go
func Terminate() *string
```

- *Type:* *string

---

##### `TerminateTimeoutInSeconds`<sup>Required</sup> <a name="TerminateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```go
func TerminateTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready">Ready</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">ReadyTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">ValidateTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready"></a>

```go
func Ready() *string
```

- *Type:* *string

---

##### `ReadyTimeoutInSeconds`<sup>Required</sup> <a name="ReadyTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```go
func ReadyTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

##### `ValidateTimeoutInSeconds`<sup>Required</sup> <a name="ValidateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```go
func ValidateTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks">MicrovmHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks">MicrovmImageHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MicrovmHooks`<sup>Required</sup> <a name="MicrovmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks"></a>

```go
func MicrovmHooks() DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a>

---

##### `MicrovmImageHooks`<sup>Required</sup> <a name="MicrovmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks"></a>

```go
func MicrovmImageHooks() DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionHooks
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionLoggingCloudwatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream">LogStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStream`<sup>Required</sup> <a name="LogStream" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream"></a>

```go
func LogStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionLoggingCloudwatch
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledList <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionLoggingDisabledList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionLoggingDisabledList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionLoggingDisabled
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingList <a name="DataAwsLambdamicrovmsImageVersionLoggingList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionLoggingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionLoggingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionLoggingOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled">Disabled</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch"></a>

```go
func Cloudwatch() DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled"></a>

```go
func Disabled() DataAwsLambdamicrovmsImageVersionLoggingDisabledList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionLogging
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a>

---


### DataAwsLambdamicrovmsImageVersionResourcesList <a name="DataAwsLambdamicrovmsImageVersionResourcesList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdamicrovmsImageVersionResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get"></a>

```go
func Get(index *f64) DataAwsLambdamicrovmsImageVersionResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdamicrovmsImageVersionResourcesOutputReference <a name="DataAwsLambdamicrovmsImageVersionResourcesOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdamicrovmsimageversion"

dataawslambdamicrovmsimageversion.NewDataAwsLambdamicrovmsImageVersionResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdamicrovmsImageVersionResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib">MinimumMemoryInMib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumMemoryInMib`<sup>Required</sup> <a name="MinimumMemoryInMib" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib"></a>

```go
func MinimumMemoryInMib() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdamicrovmsImageVersionResources
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a>

---



