# `dataAwsOpensearchserverlessCollectionGroups` Submodule <a name="`dataAwsOpensearchserverlessCollectionGroups` Submodule" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessCollectionGroups <a name="DataAwsOpensearchserverlessCollectionGroups" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/opensearchserverless_collection_groups aws_opensearchserverless_collection_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.NewDataAwsOpensearchserverlessCollectionGroups(scope Construct, id *string, config DataAwsOpensearchserverlessCollectionGroupsConfig) DataAwsOpensearchserverlessCollectionGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig">DataAwsOpensearchserverlessCollectionGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig">DataAwsOpensearchserverlessCollectionGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.DataAwsOpensearchserverlessCollectionGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.DataAwsOpensearchserverlessCollectionGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.DataAwsOpensearchserverlessCollectionGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.DataAwsOpensearchserverlessCollectionGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsOpensearchserverlessCollectionGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsOpensearchserverlessCollectionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/opensearchserverless_collection_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessCollectionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries">CollectionGroupSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CollectionGroupSummaries`<sup>Required</sup> <a name="CollectionGroupSummaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries"></a>

```go
func CollectionGroupSummaries() DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

&dataawsopensearchserverlesscollectiongroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries {

}
```


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

&dataawsopensearchserverlesscollectiongroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits {

}
```


### DataAwsOpensearchserverlessCollectionGroupsConfig <a name="DataAwsOpensearchserverlessCollectionGroupsConfig" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

&dataawsopensearchserverlesscollectiongroups.DataAwsOpensearchserverlessCollectionGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/opensearchserverless_collection_groups#region DataAwsOpensearchserverlessCollectionGroups#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.NewDataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.NewDataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">MaxIndexingCapacityInOcu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">MaxSearchCapacityInOcu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">MinIndexingCapacityInOcu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu">MinSearchCapacityInOcu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxIndexingCapacityInOcu`<sup>Required</sup> <a name="MaxIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```go
func MaxIndexingCapacityInOcu() *f64
```

- *Type:* *f64

---

##### `MaxSearchCapacityInOcu`<sup>Required</sup> <a name="MaxSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```go
func MaxSearchCapacityInOcu() *f64
```

- *Type:* *f64

---

##### `MinIndexingCapacityInOcu`<sup>Required</sup> <a name="MinIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```go
func MinIndexingCapacityInOcu() *f64
```

- *Type:* *f64

---

##### `MinSearchCapacityInOcu`<sup>Required</sup> <a name="MinSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```go
func MinSearchCapacityInOcu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a>

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.NewDataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsopensearchserverlesscollectiongroups"

dataawsopensearchserverlesscollectiongroups.NewDataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits">CapacityLimits</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections">NumberOfCollections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas">StandbyReplicas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits"></a>

```go
func CapacityLimits() DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumberOfCollections`<sup>Required</sup> <a name="NumberOfCollections" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections"></a>

```go
func NumberOfCollections() *f64
```

- *Type:* *f64

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas"></a>

```go
func StandbyReplicas() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a>

---



