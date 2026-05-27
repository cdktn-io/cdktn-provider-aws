# `dataAwsChatbotSlackWorkspace` Submodule <a name="`dataAwsChatbotSlackWorkspace` Submodule" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsChatbotSlackWorkspace <a name="DataAwsChatbotSlackWorkspace" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/chatbot_slack_workspace aws_chatbot_slack_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsChatbotSlackWorkspace(Construct Scope, string Id, DataAwsChatbotSlackWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig">DataAwsChatbotSlackWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig">DataAwsChatbotSlackWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsChatbotSlackWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsChatbotSlackWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsChatbotSlackWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsChatbotSlackWorkspace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsChatbotSlackWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsChatbotSlackWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsChatbotSlackWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsChatbotSlackWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/chatbot_slack_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsChatbotSlackWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.slackTeamId">SlackTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.slackTeamNameInput">SlackTeamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.slackTeamName">SlackTeamName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `SlackTeamId`<sup>Required</sup> <a name="SlackTeamId" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.slackTeamId"></a>

```csharp
public string SlackTeamId { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SlackTeamNameInput`<sup>Optional</sup> <a name="SlackTeamNameInput" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.slackTeamNameInput"></a>

```csharp
public string SlackTeamNameInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SlackTeamName`<sup>Required</sup> <a name="SlackTeamName" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.slackTeamName"></a>

```csharp
public string SlackTeamName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsChatbotSlackWorkspaceConfig <a name="DataAwsChatbotSlackWorkspaceConfig" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsChatbotSlackWorkspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SlackTeamName,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.slackTeamName">SlackTeamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/chatbot_slack_workspace#slack_team_name DataAwsChatbotSlackWorkspace#slack_team_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SlackTeamName`<sup>Required</sup> <a name="SlackTeamName" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.slackTeamName"></a>

```csharp
public string SlackTeamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/chatbot_slack_workspace#slack_team_name DataAwsChatbotSlackWorkspace#slack_team_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsChatbotSlackWorkspace.DataAwsChatbotSlackWorkspaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/chatbot_slack_workspace#region DataAwsChatbotSlackWorkspace#region}

---



