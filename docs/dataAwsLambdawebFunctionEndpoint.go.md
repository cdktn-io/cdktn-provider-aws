# `dataAwsLambdawebFunctionEndpoint` Submodule <a name="`dataAwsLambdawebFunctionEndpoint` Submodule" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdawebFunctionEndpoint <a name="DataAwsLambdawebFunctionEndpoint" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.NewDataAwsLambdawebFunctionEndpoint(scope Construct, id *string, config DataAwsLambdawebFunctionEndpointConfig) DataAwsLambdawebFunctionEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig">DataAwsLambdawebFunctionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig">DataAwsLambdawebFunctionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsLambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsLambdawebFunctionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsLambdawebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdawebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.autoDeploymentMode">AutoDeploymentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionalDomainNames">RegionalDomainNames</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.revisionWeights">RevisionWeights</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList">DataAwsLambdawebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList">DataAwsLambdawebFunctionEndpointScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.throttleConfig">ThrottleConfig</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList">DataAwsLambdawebFunctionEndpointThrottleConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AutoDeploymentMode`<sup>Required</sup> <a name="AutoDeploymentMode" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.autoDeploymentMode"></a>

```go
func AutoDeploymentMode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `RegionalDomainNames`<sup>Required</sup> <a name="RegionalDomainNames" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionalDomainNames"></a>

```go
func RegionalDomainNames() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RevisionWeights`<sup>Required</sup> <a name="RevisionWeights" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.revisionWeights"></a>

```go
func RevisionWeights() DataAwsLambdawebFunctionEndpointRevisionWeightsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList">DataAwsLambdawebFunctionEndpointRevisionWeightsList</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.scalingConfig"></a>

```go
func ScalingConfig() DataAwsLambdawebFunctionEndpointScalingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList">DataAwsLambdawebFunctionEndpointScalingConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `ThrottleConfig`<sup>Required</sup> <a name="ThrottleConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.throttleConfig"></a>

```go
func ThrottleConfig() DataAwsLambdawebFunctionEndpointThrottleConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList">DataAwsLambdawebFunctionEndpointThrottleConfigList</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdawebFunctionEndpointConfig <a name="DataAwsLambdawebFunctionEndpointConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

&dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointName: *string,
	FunctionName: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}.

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#region DataAwsLambdawebFunctionEndpoint#region}

---

### DataAwsLambdawebFunctionEndpointRevisionWeights <a name="DataAwsLambdawebFunctionEndpointRevisionWeights" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

&dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpointRevisionWeights {

}
```


### DataAwsLambdawebFunctionEndpointScalingConfig <a name="DataAwsLambdawebFunctionEndpointScalingConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

&dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpointScalingConfig {

}
```


### DataAwsLambdawebFunctionEndpointThrottleConfig <a name="DataAwsLambdawebFunctionEndpointThrottleConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

&dataawslambdawebfunctionendpoint.DataAwsLambdawebFunctionEndpointThrottleConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdawebFunctionEndpointRevisionWeightsList <a name="DataAwsLambdawebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.NewDataAwsLambdawebFunctionEndpointRevisionWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdawebFunctionEndpointRevisionWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get"></a>

```go
func Get(index *f64) DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference <a name="DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.NewDataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">RevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights">DataAwsLambdawebFunctionEndpointRevisionWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```go
func RevisionId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdawebFunctionEndpointRevisionWeights
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights">DataAwsLambdawebFunctionEndpointRevisionWeights</a>

---


### DataAwsLambdawebFunctionEndpointScalingConfigList <a name="DataAwsLambdawebFunctionEndpointScalingConfigList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.NewDataAwsLambdawebFunctionEndpointScalingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdawebFunctionEndpointScalingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get"></a>

```go
func Get(index *f64) DataAwsLambdawebFunctionEndpointScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdawebFunctionEndpointScalingConfigOutputReference <a name="DataAwsLambdawebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.NewDataAwsLambdawebFunctionEndpointScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdawebFunctionEndpointScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">MaxEnvironments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig">DataAwsLambdawebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxEnvironments`<sup>Required</sup> <a name="MaxEnvironments" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```go
func MaxEnvironments() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdawebFunctionEndpointScalingConfig
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig">DataAwsLambdawebFunctionEndpointScalingConfig</a>

---


### DataAwsLambdawebFunctionEndpointThrottleConfigList <a name="DataAwsLambdawebFunctionEndpointThrottleConfigList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.NewDataAwsLambdawebFunctionEndpointThrottleConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLambdawebFunctionEndpointThrottleConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get"></a>

```go
func Get(index *f64) DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference <a name="DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawslambdawebfunctionendpoint"

dataawslambdawebfunctionendpoint.NewDataAwsLambdawebFunctionEndpointThrottleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig">DataAwsLambdawebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```go
func RateLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLambdawebFunctionEndpointThrottleConfig
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig">DataAwsLambdawebFunctionEndpointThrottleConfig</a>

---



