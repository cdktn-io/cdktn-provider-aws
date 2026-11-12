# `dataAwsLambdawebFunctionEndpoint` Submodule <a name="`dataAwsLambdawebFunctionEndpoint` Submodule" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdawebFunctionEndpoint <a name="DataAwsLambdawebFunctionEndpoint" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint(scope: Construct, id: string, config: DataAwsLambdawebFunctionEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig">DataAwsLambdawebFunctionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig">DataAwsLambdawebFunctionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsLambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLambdawebFunctionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLambdawebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdawebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.autoDeploymentMode">autoDeploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionalDomainNames">regionalDomainNames</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.revisionWeights">revisionWeights</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList">DataAwsLambdawebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList">DataAwsLambdawebFunctionEndpointScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList">DataAwsLambdawebFunctionEndpointThrottleConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `autoDeploymentMode`<sup>Required</sup> <a name="autoDeploymentMode" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.autoDeploymentMode"></a>

```typescript
public readonly autoDeploymentMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `regionalDomainNames`<sup>Required</sup> <a name="regionalDomainNames" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionalDomainNames"></a>

```typescript
public readonly regionalDomainNames: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `revisionWeights`<sup>Required</sup> <a name="revisionWeights" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.revisionWeights"></a>

```typescript
public readonly revisionWeights: DataAwsLambdawebFunctionEndpointRevisionWeightsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList">DataAwsLambdawebFunctionEndpointRevisionWeightsList</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: DataAwsLambdawebFunctionEndpointScalingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList">DataAwsLambdawebFunctionEndpointScalingConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `throttleConfig`<sup>Required</sup> <a name="throttleConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.throttleConfig"></a>

```typescript
public readonly throttleConfig: DataAwsLambdawebFunctionEndpointThrottleConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList">DataAwsLambdawebFunctionEndpointThrottleConfigList</a>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdawebFunctionEndpointConfig <a name="DataAwsLambdawebFunctionEndpointConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const dataAwsLambdawebFunctionEndpointConfig: dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#region DataAwsLambdawebFunctionEndpoint#region}

---

### DataAwsLambdawebFunctionEndpointRevisionWeights <a name="DataAwsLambdawebFunctionEndpointRevisionWeights" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const dataAwsLambdawebFunctionEndpointRevisionWeights: dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights = { ... }
```


### DataAwsLambdawebFunctionEndpointScalingConfig <a name="DataAwsLambdawebFunctionEndpointScalingConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const dataAwsLambdawebFunctionEndpointScalingConfig: dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig = { ... }
```


### DataAwsLambdawebFunctionEndpointThrottleConfig <a name="DataAwsLambdawebFunctionEndpointThrottleConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const dataAwsLambdawebFunctionEndpointThrottleConfig: dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdawebFunctionEndpointRevisionWeightsList <a name="DataAwsLambdawebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get"></a>

```typescript
public get(index: number): DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference <a name="DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights">DataAwsLambdawebFunctionEndpointRevisionWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdawebFunctionEndpointRevisionWeights;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights">DataAwsLambdawebFunctionEndpointRevisionWeights</a>

---


### DataAwsLambdawebFunctionEndpointScalingConfigList <a name="DataAwsLambdawebFunctionEndpointScalingConfigList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get"></a>

```typescript
public get(index: number): DataAwsLambdawebFunctionEndpointScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdawebFunctionEndpointScalingConfigOutputReference <a name="DataAwsLambdawebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">maxEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig">DataAwsLambdawebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxEnvironments`<sup>Required</sup> <a name="maxEnvironments" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```typescript
public readonly maxEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdawebFunctionEndpointScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig">DataAwsLambdawebFunctionEndpointScalingConfig</a>

---


### DataAwsLambdawebFunctionEndpointThrottleConfigList <a name="DataAwsLambdawebFunctionEndpointThrottleConfigList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get"></a>

```typescript
public get(index: number): DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference <a name="DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig">DataAwsLambdawebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdawebFunctionEndpointThrottleConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig">DataAwsLambdawebFunctionEndpointThrottleConfig</a>

---



