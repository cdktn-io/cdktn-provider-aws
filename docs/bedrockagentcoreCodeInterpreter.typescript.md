# `bedrockagentcoreCodeInterpreter` Submodule <a name="`bedrockagentcoreCodeInterpreter` Submodule" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCodeInterpreter <a name="BedrockagentcoreCodeInterpreter" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter aws_bedrockagentcore_code_interpreter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

new bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter(scope: Construct, id: string, config: BedrockagentcoreCodeInterpreterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig">BedrockagentcoreCodeInterpreterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig">BedrockagentcoreCodeInterpreterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentcoreCodeInterpreterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreCodeInterpreter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreCodeInterpreter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCodeInterpreter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn">codeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId">codeInterpreterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `codeInterpreterArn`<sup>Required</sup> <a name="codeInterpreterArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn"></a>

```typescript
public readonly codeInterpreterArn: string;
```

- *Type:* string

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId"></a>

```typescript
public readonly codeInterpreterId: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreCodeInterpreterNetworkConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreCodeInterpreterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentcoreCodeInterpreterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCodeInterpreterConfig <a name="BedrockagentcoreCodeInterpreterConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

const bedrockagentcoreCodeInterpreterConfig: bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration">networkConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#network_configuration BedrockagentcoreCodeInterpreter#network_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#region BedrockagentcoreCodeInterpreter#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreCodeInterpreterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#timeouts BedrockagentcoreCodeInterpreter#timeouts}

---

### BedrockagentcoreCodeInterpreterNetworkConfiguration <a name="BedrockagentcoreCodeInterpreterNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

const bedrockagentcoreCodeInterpreterNetworkConfiguration: bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig">vpcConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]</code> | vpc_config block. |

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#vpc_config BedrockagentcoreCodeInterpreter#vpc_config}

---

### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

const bedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig: bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}. |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}.

---

### BedrockagentcoreCodeInterpreterTimeouts <a name="BedrockagentcoreCodeInterpreterTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

const bedrockagentcoreCodeInterpreterTimeouts: bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#create BedrockagentcoreCodeInterpreter#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/bedrockagentcore_code_interpreter#delete BedrockagentcoreCodeInterpreter#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCodeInterpreterNetworkConfigurationList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

new bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

new bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

---

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

new bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get"></a>

```typescript
public get(index: number): BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

new bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreCodeInterpreterTimeoutsOutputReference <a name="BedrockagentcoreCodeInterpreterTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreter } from '@cdktf/provider-aws'

new bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---



