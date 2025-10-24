# `bedrockagentcoreMemoryStrategy` Submodule <a name="`bedrockagentcoreMemoryStrategy` Submodule" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreMemoryStrategy <a name="BedrockagentcoreMemoryStrategy" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy(scope: Construct, id: string, config: BedrockagentcoreMemoryStrategyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig">BedrockagentcoreMemoryStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig">BedrockagentcoreMemoryStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetMemoryExecutionRoleArn">resetMemoryExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putConfiguration"></a>

```typescript
public putConfiguration(value: IResolvable | BedrockagentcoreMemoryStrategyConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentcoreMemoryStrategyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMemoryExecutionRoleArn` <a name="resetMemoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetMemoryExecutionRoleArn"></a>

```typescript
public resetMemoryExecutionRoleArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreMemoryStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isConstruct"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformElement"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformResource"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentcoreMemoryStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreMemoryStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreMemoryStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreMemoryStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList">BedrockagentcoreMemoryStrategyConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryStrategyId">memoryStrategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference">BedrockagentcoreMemoryStrategyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configurationInput">configurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArnInput">memoryExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryIdInput">memoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespacesInput">namespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryId">memoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configuration"></a>

```typescript
public readonly configuration: BedrockagentcoreMemoryStrategyConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList">BedrockagentcoreMemoryStrategyConfigurationList</a>

---

##### `memoryStrategyId`<sup>Required</sup> <a name="memoryStrategyId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryStrategyId"></a>

```typescript
public readonly memoryStrategyId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreMemoryStrategyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference">BedrockagentcoreMemoryStrategyTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | BedrockagentcoreMemoryStrategyConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `memoryExecutionRoleArnInput`<sup>Optional</sup> <a name="memoryExecutionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArnInput"></a>

```typescript
public readonly memoryExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `memoryIdInput`<sup>Optional</sup> <a name="memoryIdInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryIdInput"></a>

```typescript
public readonly memoryIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentcoreMemoryStrategyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `memoryExecutionRoleArn`<sup>Required</sup> <a name="memoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArn"></a>

```typescript
public readonly memoryExecutionRoleArn: string;
```

- *Type:* string

---

##### `memoryId`<sup>Required</sup> <a name="memoryId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryId"></a>

```typescript
public readonly memoryId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreMemoryStrategyConfig <a name="BedrockagentcoreMemoryStrategyConfig" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

const bedrockagentcoreMemoryStrategyConfig: bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryId">memoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.namespaces">namespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.configuration">configuration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `memoryId`<sup>Required</sup> <a name="memoryId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryId"></a>

```typescript
public readonly memoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.configuration"></a>

```typescript
public readonly configuration: IResolvable | BedrockagentcoreMemoryStrategyConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#configuration BedrockagentcoreMemoryStrategy#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}.

---

##### `memoryExecutionRoleArn`<sup>Optional</sup> <a name="memoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryExecutionRoleArn"></a>

```typescript
public readonly memoryExecutionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#region BedrockagentcoreMemoryStrategy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreMemoryStrategyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#timeouts BedrockagentcoreMemoryStrategy#timeouts}

---

### BedrockagentcoreMemoryStrategyConfiguration <a name="BedrockagentcoreMemoryStrategyConfiguration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

const bedrockagentcoreMemoryStrategyConfiguration: bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.consolidation">consolidation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>[]</code> | consolidation block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.extraction">extraction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>[]</code> | extraction block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}.

---

##### `consolidation`<sup>Optional</sup> <a name="consolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.consolidation"></a>

```typescript
public readonly consolidation: IResolvable | BedrockagentcoreMemoryStrategyConfigurationConsolidation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>[]

consolidation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#consolidation BedrockagentcoreMemoryStrategy#consolidation}

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.extraction"></a>

```typescript
public readonly extraction: IResolvable | BedrockagentcoreMemoryStrategyConfigurationExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>[]

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#extraction BedrockagentcoreMemoryStrategy#extraction}

---

### BedrockagentcoreMemoryStrategyConfigurationConsolidation <a name="BedrockagentcoreMemoryStrategyConfigurationConsolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

const bedrockagentcoreMemoryStrategyConfigurationConsolidation: bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.appendToPrompt">appendToPrompt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}. |

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.appendToPrompt"></a>

```typescript
public readonly appendToPrompt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}.

---

### BedrockagentcoreMemoryStrategyConfigurationExtraction <a name="BedrockagentcoreMemoryStrategyConfigurationExtraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

const bedrockagentcoreMemoryStrategyConfigurationExtraction: bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.appendToPrompt">appendToPrompt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}. |

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.appendToPrompt"></a>

```typescript
public readonly appendToPrompt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}.

---

### BedrockagentcoreMemoryStrategyTimeouts <a name="BedrockagentcoreMemoryStrategyTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

const bedrockagentcoreMemoryStrategyTimeouts: bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#create BedrockagentcoreMemoryStrategy#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#delete BedrockagentcoreMemoryStrategy#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_memory_strategy#update BedrockagentcoreMemoryStrategy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreMemoryStrategyConfigurationConsolidationList <a name="BedrockagentcoreMemoryStrategyConfigurationConsolidationList" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreMemoryStrategyConfigurationConsolidation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>[]

---


### BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference <a name="BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPromptInput">appendToPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPrompt">appendToPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appendToPromptInput`<sup>Optional</sup> <a name="appendToPromptInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPromptInput"></a>

```typescript
public readonly appendToPromptInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPrompt"></a>

```typescript
public readonly appendToPrompt: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreMemoryStrategyConfigurationConsolidation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>

---


### BedrockagentcoreMemoryStrategyConfigurationExtractionList <a name="BedrockagentcoreMemoryStrategyConfigurationExtractionList" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.get"></a>

```typescript
public get(index: number): BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreMemoryStrategyConfigurationExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>[]

---


### BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference <a name="BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPromptInput">appendToPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPrompt">appendToPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appendToPromptInput`<sup>Optional</sup> <a name="appendToPromptInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPromptInput"></a>

```typescript
public readonly appendToPromptInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPrompt"></a>

```typescript
public readonly appendToPrompt: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreMemoryStrategyConfigurationExtraction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>

---


### BedrockagentcoreMemoryStrategyConfigurationList <a name="BedrockagentcoreMemoryStrategyConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreMemoryStrategyConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreMemoryStrategyConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>[]

---


### BedrockagentcoreMemoryStrategyConfigurationOutputReference <a name="BedrockagentcoreMemoryStrategyConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putConsolidation">putConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetConsolidation">resetConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsolidation` <a name="putConsolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putConsolidation"></a>

```typescript
public putConsolidation(value: IResolvable | BedrockagentcoreMemoryStrategyConfigurationConsolidation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putConsolidation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>[]

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putExtraction"></a>

```typescript
public putExtraction(value: IResolvable | BedrockagentcoreMemoryStrategyConfigurationExtraction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putExtraction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>[]

---

##### `resetConsolidation` <a name="resetConsolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetConsolidation"></a>

```typescript
public resetConsolidation(): void
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetExtraction"></a>

```typescript
public resetExtraction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList">BedrockagentcoreMemoryStrategyConfigurationConsolidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList">BedrockagentcoreMemoryStrategyConfigurationExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidationInput">consolidationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extractionInput">extractionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consolidation`<sup>Required</sup> <a name="consolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidation"></a>

```typescript
public readonly consolidation: BedrockagentcoreMemoryStrategyConfigurationConsolidationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList">BedrockagentcoreMemoryStrategyConfigurationConsolidationList</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extraction"></a>

```typescript
public readonly extraction: BedrockagentcoreMemoryStrategyConfigurationExtractionList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList">BedrockagentcoreMemoryStrategyConfigurationExtractionList</a>

---

##### `consolidationInput`<sup>Optional</sup> <a name="consolidationInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidationInput"></a>

```typescript
public readonly consolidationInput: IResolvable | BedrockagentcoreMemoryStrategyConfigurationConsolidation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>[]

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extractionInput"></a>

```typescript
public readonly extractionInput: IResolvable | BedrockagentcoreMemoryStrategyConfigurationExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreMemoryStrategyConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>

---


### BedrockagentcoreMemoryStrategyTimeoutsOutputReference <a name="BedrockagentcoreMemoryStrategyTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreMemoryStrategy } from '@cdktf/provider-aws'

new bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreMemoryStrategyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

---



