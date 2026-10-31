# `dataAwsSagemakerHubContent` Submodule <a name="`dataAwsSagemakerHubContent` Submodule" id="@cdktn/provider-aws.dataAwsSagemakerHubContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerHubContent <a name="DataAwsSagemakerHubContent" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content aws_sagemaker_hub_content}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

dataawssagemakerhubcontent.NewDataAwsSagemakerHubContent(scope Construct, id *string, config DataAwsSagemakerHubContentConfig) DataAwsSagemakerHubContent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig">DataAwsSagemakerHubContentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig">DataAwsSagemakerHubContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion">ResetHubContentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetHubContentVersion` <a name="ResetHubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion"></a>

```go
func ResetHubContentVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

dataawssagemakerhubcontent.DataAwsSagemakerHubContent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

dataawssagemakerhubcontent.DataAwsSagemakerHubContent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

dataawssagemakerhubcontent.DataAwsSagemakerHubContent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

dataawssagemakerhubcontent.DataAwsSagemakerHubContent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSagemakerHubContent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSagemakerHubContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSagemakerHubContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion">DocumentSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn">HubArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency">HubContentDependency</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription">HubContentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName">HubContentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument">HubContentDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown">HubContentMarkdown</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords">HubContentSearchKeywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus">HubContentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion">ReferenceMinVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn">SagemakerPublicHubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus">SupportStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn">VersionedHubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput">HubContentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput">HubContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput">HubContentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput">HubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName">HubContentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType">HubContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion">HubContentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName">HubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DocumentSchemaVersion`<sup>Required</sup> <a name="DocumentSchemaVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion"></a>

```go
func DocumentSchemaVersion() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `HubArn`<sup>Required</sup> <a name="HubArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn"></a>

```go
func HubArn() *string
```

- *Type:* *string

---

##### `HubContentArn`<sup>Required</sup> <a name="HubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn"></a>

```go
func HubContentArn() *string
```

- *Type:* *string

---

##### `HubContentDependency`<sup>Required</sup> <a name="HubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency"></a>

```go
func HubContentDependency() DataAwsSagemakerHubContentHubContentDependencyList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a>

---

##### `HubContentDescription`<sup>Required</sup> <a name="HubContentDescription" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription"></a>

```go
func HubContentDescription() *string
```

- *Type:* *string

---

##### `HubContentDisplayName`<sup>Required</sup> <a name="HubContentDisplayName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName"></a>

```go
func HubContentDisplayName() *string
```

- *Type:* *string

---

##### `HubContentDocument`<sup>Required</sup> <a name="HubContentDocument" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument"></a>

```go
func HubContentDocument() *string
```

- *Type:* *string

---

##### `HubContentMarkdown`<sup>Required</sup> <a name="HubContentMarkdown" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown"></a>

```go
func HubContentMarkdown() *string
```

- *Type:* *string

---

##### `HubContentSearchKeywords`<sup>Required</sup> <a name="HubContentSearchKeywords" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords"></a>

```go
func HubContentSearchKeywords() *[]*string
```

- *Type:* *[]*string

---

##### `HubContentStatus`<sup>Required</sup> <a name="HubContentStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus"></a>

```go
func HubContentStatus() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `ReferenceMinVersion`<sup>Required</sup> <a name="ReferenceMinVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion"></a>

```go
func ReferenceMinVersion() *string
```

- *Type:* *string

---

##### `SagemakerPublicHubContentArn`<sup>Required</sup> <a name="SagemakerPublicHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn"></a>

```go
func SagemakerPublicHubContentArn() *string
```

- *Type:* *string

---

##### `SupportStatus`<sup>Required</sup> <a name="SupportStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus"></a>

```go
func SupportStatus() *string
```

- *Type:* *string

---

##### `VersionedHubContentArn`<sup>Required</sup> <a name="VersionedHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn"></a>

```go
func VersionedHubContentArn() *string
```

- *Type:* *string

---

##### `HubContentNameInput`<sup>Optional</sup> <a name="HubContentNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput"></a>

```go
func HubContentNameInput() *string
```

- *Type:* *string

---

##### `HubContentTypeInput`<sup>Optional</sup> <a name="HubContentTypeInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput"></a>

```go
func HubContentTypeInput() *string
```

- *Type:* *string

---

##### `HubContentVersionInput`<sup>Optional</sup> <a name="HubContentVersionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput"></a>

```go
func HubContentVersionInput() *string
```

- *Type:* *string

---

##### `HubNameInput`<sup>Optional</sup> <a name="HubNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput"></a>

```go
func HubNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `HubContentName`<sup>Required</sup> <a name="HubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName"></a>

```go
func HubContentName() *string
```

- *Type:* *string

---

##### `HubContentType`<sup>Required</sup> <a name="HubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType"></a>

```go
func HubContentType() *string
```

- *Type:* *string

---

##### `HubContentVersion`<sup>Required</sup> <a name="HubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion"></a>

```go
func HubContentVersion() *string
```

- *Type:* *string

---

##### `HubName`<sup>Required</sup> <a name="HubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName"></a>

```go
func HubName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerHubContentConfig <a name="DataAwsSagemakerHubContentConfig" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

&dataawssagemakerhubcontent.DataAwsSagemakerHubContentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HubContentName: *string,
	HubContentType: *string,
	HubName: *string,
	HubContentVersion: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName">HubContentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType">HubContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName">HubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion">HubContentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HubContentName`<sup>Required</sup> <a name="HubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName"></a>

```go
HubContentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}.

---

##### `HubContentType`<sup>Required</sup> <a name="HubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType"></a>

```go
HubContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}.

---

##### `HubName`<sup>Required</sup> <a name="HubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName"></a>

```go
HubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}.

---

##### `HubContentVersion`<sup>Optional</sup> <a name="HubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion"></a>

```go
HubContentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}

---

### DataAwsSagemakerHubContentHubContentDependency <a name="DataAwsSagemakerHubContentHubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

&dataawssagemakerhubcontent.DataAwsSagemakerHubContentHubContentDependency {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSagemakerHubContentHubContentDependencyList <a name="DataAwsSagemakerHubContentHubContentDependencyList" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

dataawssagemakerhubcontent.NewDataAwsSagemakerHubContentHubContentDependencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSagemakerHubContentHubContentDependencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get"></a>

```go
func Get(index *f64) DataAwsSagemakerHubContentHubContentDependencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSagemakerHubContentHubContentDependencyOutputReference <a name="DataAwsSagemakerHubContentHubContentDependencyOutputReference" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/dataawssagemakerhubcontent"

dataawssagemakerhubcontent.NewDataAwsSagemakerHubContentHubContentDependencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSagemakerHubContentHubContentDependencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath">DependencyCopyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath">DependencyOriginPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyCopyPath`<sup>Required</sup> <a name="DependencyCopyPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath"></a>

```go
func DependencyCopyPath() *string
```

- *Type:* *string

---

##### `DependencyOriginPath`<sup>Required</sup> <a name="DependencyOriginPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath"></a>

```go
func DependencyOriginPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSagemakerHubContentHubContentDependency
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a>

---



