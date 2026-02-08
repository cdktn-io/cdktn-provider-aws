# `dataAwsCloudwatchLogDataProtectionPolicyDocument` Submodule <a name="`dataAwsCloudwatchLogDataProtectionPolicyDocument` Submodule" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudwatchLogDataProtectionPolicyDocument <a name="DataAwsCloudwatchLogDataProtectionPolicyDocument" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document aws_cloudwatch_log_data_protection_policy_document}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocument(scope Construct, id *string, config DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig) DataAwsCloudwatchLogDataProtectionPolicyDocument
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.putStatement">PutStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.putConfiguration"></a>

```go
func PutConfiguration(value DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration</a>

---

##### `PutStatement` <a name="PutStatement" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.putStatement"></a>

```go
func PutStatement(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.putStatement.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetId"></a>

```go
func ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudwatchLogDataProtectionPolicyDocument resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocument_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocument_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocument_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocument_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsCloudwatchLogDataProtectionPolicyDocument resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsCloudwatchLogDataProtectionPolicyDocument to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsCloudwatchLogDataProtectionPolicyDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudwatchLogDataProtectionPolicyDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.statement">Statement</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.statementInput">StatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.configuration"></a>

```go
func Configuration() DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.statement"></a>

```go
func Statement() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.configurationInput"></a>

```go
func ConfigurationInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.statementInput"></a>

```go
func StatementInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocument.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Statement: interface{},
	Configuration: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration,
	Description: *string,
	Id: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#name DataAwsCloudwatchLogDataProtectionPolicyDocument#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.statement">Statement</a></code> | <code>interface{}</code> | statement block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#description DataAwsCloudwatchLogDataProtectionPolicyDocument#description}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#id DataAwsCloudwatchLogDataProtectionPolicyDocument#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#version DataAwsCloudwatchLogDataProtectionPolicyDocument#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#name DataAwsCloudwatchLogDataProtectionPolicyDocument#name}.

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.statement"></a>

```go
Statement interface{}
```

- *Type:* interface{}

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#statement DataAwsCloudwatchLogDataProtectionPolicyDocument#statement}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.configuration"></a>

```go
Configuration DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#configuration DataAwsCloudwatchLogDataProtectionPolicyDocument#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#description DataAwsCloudwatchLogDataProtectionPolicyDocument#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#id DataAwsCloudwatchLogDataProtectionPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#version DataAwsCloudwatchLogDataProtectionPolicyDocument#version}.

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration {
	CustomDataIdentifier: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration.property.customDataIdentifier">CustomDataIdentifier</a></code> | <code>interface{}</code> | custom_data_identifier block. |

---

##### `CustomDataIdentifier`<sup>Optional</sup> <a name="CustomDataIdentifier" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration.property.customDataIdentifier"></a>

```go
CustomDataIdentifier interface{}
```

- *Type:* interface{}

custom_data_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#custom_data_identifier DataAwsCloudwatchLogDataProtectionPolicyDocument#custom_data_identifier}

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier {
	Name: *string,
	Regex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#name DataAwsCloudwatchLogDataProtectionPolicyDocument#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#regex DataAwsCloudwatchLogDataProtectionPolicyDocument#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#name DataAwsCloudwatchLogDataProtectionPolicyDocument#name}.

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#regex DataAwsCloudwatchLogDataProtectionPolicyDocument#regex}.

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement {
	DataIdentifiers: *[]*string,
	Operation: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation,
	Sid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement.property.dataIdentifiers">DataIdentifiers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#data_identifiers DataAwsCloudwatchLogDataProtectionPolicyDocument#data_identifiers}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement.property.sid">Sid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#sid DataAwsCloudwatchLogDataProtectionPolicyDocument#sid}. |

---

##### `DataIdentifiers`<sup>Required</sup> <a name="DataIdentifiers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement.property.dataIdentifiers"></a>

```go
DataIdentifiers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#data_identifiers DataAwsCloudwatchLogDataProtectionPolicyDocument#data_identifiers}.

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement.property.operation"></a>

```go
Operation DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#operation DataAwsCloudwatchLogDataProtectionPolicyDocument#operation}

---

##### `Sid`<sup>Optional</sup> <a name="Sid" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement.property.sid"></a>

```go
Sid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#sid DataAwsCloudwatchLogDataProtectionPolicyDocument#sid}.

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation {
	Audit: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit,
	Deidentify: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation.property.audit">Audit</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit</a></code> | audit block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation.property.deidentify">Deidentify</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify</a></code> | deidentify block. |

---

##### `Audit`<sup>Optional</sup> <a name="Audit" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation.property.audit"></a>

```go
Audit DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit</a>

audit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#audit DataAwsCloudwatchLogDataProtectionPolicyDocument#audit}

---

##### `Deidentify`<sup>Optional</sup> <a name="Deidentify" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation.property.deidentify"></a>

```go
Deidentify DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify</a>

deidentify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#deidentify DataAwsCloudwatchLogDataProtectionPolicyDocument#deidentify}

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit {
	FindingsDestination: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit.property.findingsDestination">FindingsDestination</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination</a></code> | findings_destination block. |

---

##### `FindingsDestination`<sup>Required</sup> <a name="FindingsDestination" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit.property.findingsDestination"></a>

```go
FindingsDestination DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination</a>

findings_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#findings_destination DataAwsCloudwatchLogDataProtectionPolicyDocument#findings_destination}

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination {
	CloudwatchLogs: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs,
	Firehose: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose,
	S3: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose</a></code> | firehose block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3</a></code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination.property.cloudwatchLogs"></a>

```go
CloudwatchLogs DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#cloudwatch_logs DataAwsCloudwatchLogDataProtectionPolicyDocument#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination.property.firehose"></a>

```go
Firehose DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#firehose DataAwsCloudwatchLogDataProtectionPolicyDocument#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination.property.s3"></a>

```go
S3 DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#s3 DataAwsCloudwatchLogDataProtectionPolicyDocument#s3}

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs {
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#log_group DataAwsCloudwatchLogDataProtectionPolicyDocument#log_group}. |

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#log_group DataAwsCloudwatchLogDataProtectionPolicyDocument#log_group}.

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose {
	DeliveryStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#delivery_stream DataAwsCloudwatchLogDataProtectionPolicyDocument#delivery_stream}. |

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#delivery_stream DataAwsCloudwatchLogDataProtectionPolicyDocument#delivery_stream}.

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3 <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3 {
	Bucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#bucket DataAwsCloudwatchLogDataProtectionPolicyDocument#bucket}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#bucket DataAwsCloudwatchLogDataProtectionPolicyDocument#bucket}.

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify {
	MaskConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify.property.maskConfig">MaskConfig</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig</a></code> | mask_config block. |

---

##### `MaskConfig`<sup>Required</sup> <a name="MaskConfig" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify.property.maskConfig"></a>

```go
MaskConfig DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig</a>

mask_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#mask_config DataAwsCloudwatchLogDataProtectionPolicyDocument#mask_config}

---

### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

&dataawscloudwatchlogdataprotectionpolicydocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.get"></a>

```go
func Get(index *f64) DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.putCustomDataIdentifier">PutCustomDataIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.resetCustomDataIdentifier">ResetCustomDataIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomDataIdentifier` <a name="PutCustomDataIdentifier" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.putCustomDataIdentifier"></a>

```go
func PutCustomDataIdentifier(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.putCustomDataIdentifier.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomDataIdentifier` <a name="ResetCustomDataIdentifier" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.resetCustomDataIdentifier"></a>

```go
func ResetCustomDataIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.customDataIdentifier">CustomDataIdentifier</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.customDataIdentifierInput">CustomDataIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomDataIdentifier`<sup>Required</sup> <a name="CustomDataIdentifier" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.customDataIdentifier"></a>

```go
func CustomDataIdentifier() DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifierList</a>

---

##### `CustomDataIdentifierInput`<sup>Optional</sup> <a name="CustomDataIdentifierInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.customDataIdentifierInput"></a>

```go
func CustomDataIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration">DataAwsCloudwatchLogDataProtectionPolicyDocumentConfiguration</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.get"></a>

```go
func Get(index *f64) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putFirehose"></a>

```go
func PutFirehose(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putS3"></a>

```go
func PutS3(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resetFirehose"></a>

```go
func ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.firehose"></a>

```go
func Firehose() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.s3"></a>

```go
func S3() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.firehoseInput"></a>

```go
func FirehoseInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.s3Input"></a>

```go
func S3Input() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.putFindingsDestination">PutFindingsDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFindingsDestination` <a name="PutFindingsDestination" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.putFindingsDestination"></a>

```go
func PutFindingsDestination(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.putFindingsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.findingsDestination">FindingsDestination</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.findingsDestinationInput">FindingsDestinationInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FindingsDestination`<sup>Required</sup> <a name="FindingsDestination" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.findingsDestination"></a>

```go
func FindingsDestination() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference</a>

---

##### `FindingsDestinationInput`<sup>Optional</sup> <a name="FindingsDestinationInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.findingsDestinationInput"></a>

```go
func FindingsDestinationInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.putMaskConfig">PutMaskConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaskConfig` <a name="PutMaskConfig" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.putMaskConfig"></a>

```go
func PutMaskConfig(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.putMaskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.maskConfig">MaskConfig</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.maskConfigInput">MaskConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaskConfig`<sup>Required</sup> <a name="MaskConfig" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.maskConfig"></a>

```go
func MaskConfig() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference</a>

---

##### `MaskConfigInput`<sup>Optional</sup> <a name="MaskConfigInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.maskConfigInput"></a>

```go
func MaskConfigInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.putAudit">PutAudit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.putDeidentify">PutDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.resetAudit">ResetAudit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.resetDeidentify">ResetDeidentify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudit` <a name="PutAudit" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.putAudit"></a>

```go
func PutAudit(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.putAudit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit</a>

---

##### `PutDeidentify` <a name="PutDeidentify" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.putDeidentify"></a>

```go
func PutDeidentify(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.putDeidentify.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify</a>

---

##### `ResetAudit` <a name="ResetAudit" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.resetAudit"></a>

```go
func ResetAudit()
```

##### `ResetDeidentify` <a name="ResetDeidentify" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.resetDeidentify"></a>

```go
func ResetDeidentify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.audit">Audit</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.deidentify">Deidentify</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.auditInput">AuditInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.deidentifyInput">DeidentifyInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audit`<sup>Required</sup> <a name="Audit" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.audit"></a>

```go
func Audit() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference</a>

---

##### `Deidentify`<sup>Required</sup> <a name="Deidentify" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.deidentify"></a>

```go
func Deidentify() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference</a>

---

##### `AuditInput`<sup>Optional</sup> <a name="AuditInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.auditInput"></a>

```go
func AuditInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit</a>

---

##### `DeidentifyInput`<sup>Optional</sup> <a name="DeidentifyInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.deidentifyInput"></a>

```go
func DeidentifyInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation</a>

---


### DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference <a name="DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawscloudwatchlogdataprotectionpolicydocument"

dataawscloudwatchlogdataprotectionpolicydocument.NewDataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.putOperation">PutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.resetSid">ResetSid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperation` <a name="PutOperation" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.putOperation"></a>

```go
func PutOperation(value DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation</a>

---

##### `ResetSid` <a name="ResetSid" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.resetSid"></a>

```go
func ResetSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.dataIdentifiersInput">DataIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.operationInput">OperationInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.sidInput">SidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.dataIdentifiers">DataIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.operation"></a>

```go
func Operation() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference</a>

---

##### `DataIdentifiersInput`<sup>Optional</sup> <a name="DataIdentifiersInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.dataIdentifiersInput"></a>

```go
func DataIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.operationInput"></a>

```go
func OperationInput() DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation">DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation</a>

---

##### `SidInput`<sup>Optional</sup> <a name="SidInput" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.sidInput"></a>

```go
func SidInput() *string
```

- *Type:* *string

---

##### `DataIdentifiers`<sup>Required</sup> <a name="DataIdentifiers" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.dataIdentifiers"></a>

```go
func DataIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudwatchLogDataProtectionPolicyDocument.DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



